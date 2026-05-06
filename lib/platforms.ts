export type PlatformStatus = "operating" | "in-build" | "in-research";

export type Platform = {
  ordinal: string;
  name: string;
  status: PlatformStatus;
  tagline?: string;
  description?: string[];
  diagram?: "arogyam";
  table?: { label: string; value: string; meta: string }[];
  link?: { label: string; href: string };
  reservedNote?: string;
};

export const platforms: Platform[] = [
  {
    ordinal: "01",
    name: "AROGYAM",
    status: "operating",
    tagline: "Practice OS for Indian healthcare practitioners.",
    description: [
      "A multi-tenant platform for Indian doctors and clinics. Bilingual (English + Marathi + Hindi), DPDP Act 2023 compliant from day one, and ABDM-ready for ABHA-linked records.",
      "Arogyam handles appointment scheduling, patient records, casepapers with versioning, per-doctor RAG chatbots, and WhatsApp-first patient journeys. Currently operating Tenant #1 in Solapur.",
    ],
    diagram: "arogyam",
    table: [
      { label: "TENANTS", value: "1 active · 12 in pipeline", meta: "tnt" },
      { label: "LANGUAGES", value: "English · Marathi · Hindi", meta: "lng/03" },
      { label: "COMPLIANCE", value: "DPDP 2023 · ABDM (M2)", meta: "cmp" },
      {
        label: "STACK",
        value: "Next.js · Postgres · Rust · Python LangGraph · pgvector",
        meta: "stk",
      },
    ],
    link: { label: "arogyam.modlio.com", href: "https://arogyam.modlio.com" },
  },
  {
    ordinal: "02",
    name: "—",
    status: "in-research",
    description: [
      "A second platform is in early research. Modlio's pace is deliberate — we ship one platform fully before starting the next.",
    ],
    reservedNote: "RESERVED · RETURN IN 2027",
  },
];
