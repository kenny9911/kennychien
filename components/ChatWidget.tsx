"use client";

/* Kenny.AI chat — FAB + panel, port of the chat logic in assets/app.js.
   Posts { lang, messages: [{ role: 'user'|'assistant', content }] } to /api/chat
   and expects { reply } back (see app/api/chat/route.ts). */

import { useEffect, useRef, useState } from "react";
import { I18N, type Lang } from "@/lib/i18n";

type Msg = { role: "user" | "ai"; text: string };

export default function ChatWidget({
  lang,
  open,
  onOpenChange,
}: {
  lang: Lang;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const t = I18N[lang];
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState(""); // controlled draft — survives close/reopen
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keep the transcript pinned to the newest message.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy, open]);

  async function send() {
    if (busy || !open) return;
    const q = draft.trim();
    if (!q) return;
    const next: Msg[] = [...msgs, { role: "user", text: q }];
    setMsgs(next);
    setDraft("");
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          messages: next.map((m) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data: { reply?: unknown } = await r.json();
      const reply = String(data?.reply ?? "").trim();
      if (!reply) throw new Error("empty");
      setMsgs((cur) => [...cur, { role: "ai", text: reply }]);
    } catch {
      setMsgs((cur) => [...cur, { role: "ai", text: t.chatErr }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button className="kc-fab" aria-label="AI assistant" onClick={() => onOpenChange(!open)}>
        {open ? "✕" : "✳"}
      </button>
      {open && (
        <div className="kc-chat" role="dialog" aria-label="Kenny.AI">
          <div className="kc-chat-head">
            <span className="kc-chat-dot"></span>
            <span className="kc-chat-name">KENNY.AI</span>
            <span className="kc-chat-sub">{t.chatSub}</span>
            <button className="kc-chat-close" aria-label="Close" onClick={() => onOpenChange(false)}>
              ✕
            </button>
          </div>
          <div className="kc-chat-body" ref={bodyRef}>
            <div className="kc-msg kc-msg--ai">{t.chatGreet}</div>
            {msgs.map((m, i) => (
              <div key={i} className={"kc-msg " + (m.role === "user" ? "kc-msg--user" : "kc-msg--ai")}>
                {m.text}
              </div>
            ))}
            {busy && <div className="kc-msg kc-msg--busy">{t.chatBusy}</div>}
          </div>
          <div className="kc-chat-note">{t.chatNote}</div>
          <div className="kc-chat-inputrow">
            <input
              ref={inputRef}
              className="kc-chat-input"
              placeholder={t.chatPh}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void send();
              }}
            />
            <button className="kc-chat-send" disabled={busy} onClick={() => void send()}>
              {t.chatSend}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
