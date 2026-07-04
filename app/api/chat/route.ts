/* POST /api/chat — Kenny.AI assistant endpoint.
   Body: { lang: 'en'|'zh-CN'|'zh-TW', messages: [{role:'user'|'assistant', content}] }
   Response: { reply }
   Env: OPENROUTER_API_KEY (required), CHAT_MODEL (optional). */
import { NextResponse } from "next/server";

const PERSONA =
  "You are 'Kenny.AI', the on-site AI assistant of kennychien.com — the personal site of Kenny Chien, an enterprise AI consultant and educator for the agentic era. His expertise: vibe coding, AI coding, agentic application development, forward deployed engineering (FDE), and agentic ontology. He offers: CONSULTING (AI Application Launch engagements of 6-12 weeks; Agentic Architecture & Ontology design; embedded FDE work), COACHING (Vibe Teaming — an AI-native team operating model; 1:1 executive coaching for leaders; a 4-week Vibe Coding Bootcamp cohort for developers; 1-2 day team workshops), PRODUCTS (The Vibe Coding Playbook digital book; Ontology Canvas toolkit; free Agent Launch Checklist; Deep Agents — a platform for long-horizon enterprise agents; Ontology Generator — a tool that drafts agent-readable ontologies from your systems and docs), a PODCAST (The Agentic Hour), plus essays and a blog. Contact: kenny.chien@gmail.com. Answer the visitor concisely (under 120 words), in a confident, visionary but grounded tone. If asked something unrelated to Kenny, AI, or his services, politely steer back.";

const LANGNAME: Record<string, string> = {
  en: "English",
  "zh-CN": "Simplified Chinese (简体中文)",
  "zh-TW": "Traditional Chinese (繁體中文)",
};

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "Chat is not configured" }, { status: 503 });
  }

  let body: { lang?: string; messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lang = body.lang && LANGNAME[body.lang] ? body.lang : "en";
  const messages = Array.isArray(body.messages) ? body.messages : [];

  // keep the request bounded: last 20 turns, 2000 chars each, roles whitelisted
  const history: ChatMessage[] = messages
    .slice(-20)
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m.content === "string" &&
        (m.role === "user" || m.role === "assistant"),
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (!history.length || history[history.length - 1].role !== "user") {
    return NextResponse.json({ error: "Last message must be from the user" }, { status: 400 });
  }

  const system = `${PERSONA}\n\nIMPORTANT: Reply in ${LANGNAME[lang]}.`;

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://www.kennychien.com",
        "X-Title": "Kenny.AI",
      },
      body: JSON.stringify({
        model: process.env.CHAT_MODEL || "anthropic/claude-sonnet-4.6",
        max_tokens: 400,
        messages: [{ role: "system", content: system }, ...history],
      }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("openrouter error", r.status, detail.slice(0, 500));
      return NextResponse.json({ error: "Upstream model error" }, { status: 502 });
    }
    const data = await r.json();
    const reply = String(data?.choices?.[0]?.message?.content ?? "").trim();
    if (!reply) {
      return NextResponse.json({ error: "Empty model reply" }, { status: 502 });
    }
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("chat handler error", err);
    return NextResponse.json({ error: "Chat temporarily unavailable" }, { status: 502 });
  }
}
