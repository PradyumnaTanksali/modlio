import { SectionRule } from "@/components/primitives/SectionRule";
import { CapabilityCard } from "@/components/primitives/CapabilityCard";

const CAPABILITIES = [
  {
    ordinal: "01",
    title: "MULTI-TENANT PLATFORMS",
    body: "Postgres RLS, schema isolation, audit logs. Built so a leak is impossible, not unlikely.",
    tags: ["rls", "prisma", "audit", "billing"],
  },
  {
    ordinal: "02",
    title: "AI ORCHESTRATION",
    body: "LangGraph, tool routing, RAG pipelines, eval harnesses. We treat LLMs as components, not magic.",
    tags: ["langgraph", "pgvector", "rag", "evals"],
  },
  {
    ordinal: "03",
    title: "BILINGUAL SYSTEMS",
    body: "Indic-language-first products. Marathi, Hindi, Tamil, soon Bengali. Translation as data, not afterthought.",
    tags: ["indictrans2", "bhashini", "i18n"],
  },
  {
    ordinal: "04",
    title: "COMPLIANCE-NATIVE BUILDS",
    body: "DPDP, ABDM, HIPAA-aligned, SOC2-ready. Compliance is part of migration #1.",
    tags: ["dpdp", "abdm", "audit-trail"],
  },
  {
    ordinal: "05",
    title: "REAL-TIME INFRASTRUCTURE",
    body: "Rust + Axum WebSocket fan-out, presence, sync. Where Node falls over, we go to Rust.",
    tags: ["axum", "tokio", "websocket", "fly"],
  },
  {
    ordinal: "06",
    title: "DESKTOP-NATIVE WORKFLOWS",
    body: "Tauri 2 + SQLCipher for offline-first clinical tools. The frontline doesn't always have wifi.",
    tags: ["tauri", "sqlcipher", "biometric"],
  },
];

export function Capabilities() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
          <div className="md:col-span-4">
            <SectionRule ordinal="02" label="CAPABILITIES" />
            <h2
              className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              What we<br />build well.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[60ch]">
              Six things we do at production quality. The list is short on
              purpose. If it&rsquo;s on this list, we have shipped it; if it
              isn&rsquo;t, we don&rsquo;t take that work.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-rule">
          {CAPABILITIES.map((c) => (
            <CapabilityCard key={c.ordinal} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
