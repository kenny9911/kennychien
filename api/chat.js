/* POST /api/chat — Kenny.AI assistant endpoint (Vercel serverless function).
   Body: { lang: 'en'|'zh-CN'|'zh-TW', messages: [{role:'user'|'assistant', content}] }
   Response: { reply }
   Env: OPENROUTER_API_KEY (required), CHAT_MODEL (optional, defaults to Claude Sonnet via OpenRouter). */

const PERSONA = "You are 'Kenny.AI', the on-site AI assistant of kennychien.com — the personal site of Kenny Chien, an enterprise AI consultant and educator for the agentic era. His expertise: vibe coding, AI coding, agentic application development, forward deployed engineering (FDE), and agentic ontology. He offers: CONSULTING (AI Application Launch engagements of 6-12 weeks; Agentic Architecture & Ontology design; embedded FDE work), COACHING (1:1 executive coaching for leaders; a 4-week Vibe Coding Bootcamp cohort for developers; 1-2 day team workshops), PRODUCTS (The Vibe Coding Playbook digital book; Ontology Canvas toolkit; free Agent Launch Checklist; Deep Agents — a platform for long-horizon enterprise agents; Ontology Generator — a tool that drafts agent-readable ontologies from your systems and docs), a PODCAST (The Agentic Hour, biweekly), plus essays and a blog. Contact: kenny.chien@gmail.com. Answer the visitor concisely (under 120 words), in a confident, visionary but grounded tone. If asked something unrelated to Kenny, AI, or his services, politely steer back.";

const LANGNAME = {
  'en': 'English',
  'zh-CN': 'Simplified Chinese (简体中文)',
  'zh-TW': 'Traditional Chinese (繁體中文)'
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return res.status(503).json({ error: 'Chat is not configured' });

  const body = req.body || {};
  const lang = LANGNAME[body.lang] ? body.lang : 'en';
  const messages = Array.isArray(body.messages) ? body.messages : [];

  // keep the request bounded: last 20 turns, 2000 chars each, roles whitelisted
  const history = messages.slice(-20)
    .filter(m => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
    .map(m => ({ role: m.role, content: m.content.slice(0, 2000) }));
  if (!history.length || history[history.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Last message must be from the user' });
  }

  const system = PERSONA + '\n\nIMPORTANT: Reply in ' + LANGNAME[lang] + '.';

  try {
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://kennychien.com',
        'X-Title': 'Kenny.AI'
      },
      body: JSON.stringify({
        model: process.env.CHAT_MODEL || 'anthropic/claude-sonnet-4.6',
        max_tokens: 400,
        messages: [{ role: 'system', content: system }].concat(history)
      })
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('openrouter error', r.status, detail.slice(0, 500));
      return res.status(502).json({ error: 'Upstream model error' });
    }
    const data = await r.json();
    const reply = data && data.choices && data.choices[0] && data.choices[0].message
      ? String(data.choices[0].message.content || '').trim()
      : '';
    if (!reply) return res.status(502).json({ error: 'Empty model reply' });
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('chat handler error', err);
    return res.status(502).json({ error: 'Chat temporarily unavailable' });
  }
};
