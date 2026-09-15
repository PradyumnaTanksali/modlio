/** Where demo requests go. One address, named once. */
export const DEMO_EMAIL = "tanksalipradyumna@gmail.com";

export type PlatformStatus = "operating" | "in-build" | "in-research";

export type Platform = {
  ordinal: string;
  name: string;
  status: PlatformStatus;
  tagline?: string;
  description?: string[];
  diagram?: "arogyam" | "streamline" | "ordio";
  /** Mono slug shown above the schematic, e.g. `arogyam.v2`. */
  diagramLabel?: string;
  table?: { label: string; value: string; meta: string }[];
  link?: { label: string; href: string };
  /** Internal deep link, rendered alongside the outbound link. */
  internalLink?: { label: string; href: string };
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
    diagramLabel: "arogyam.v2",
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
    link: { label: "drtanvis.corsw.in", href: "https://drtanvis.corsw.in/en" },
    internalLink: { label: "tenants", href: "/tenants" },
  },
  {
    ordinal: "02",
    name: "STREAMLINE",
    status: "operating",
    tagline: "Quote-to-dispatch ERP for small manufacturers.",
    description: [
      "A multi-tenant ERP for small manufacturing businesses, rebuilt from a single-machine desktop system into a hosted platform. Every business row belongs to an org and no query runs unscoped — isolation is enforced in Postgres, not in application conditionals.",
      "StreamLine runs the quote-to-dispatch pipeline: quotations with revisions and PDF delivery, purchase orders that receive into stock in one transaction, and a catalog whose stock levels are derived from an append-only movement ledger. Money is stored as numeric(12,2) and computed in integer paise.",
    ],
    diagram: "streamline",
    diagramLabel: "streamline.v1",
    table: [
      {
        label: "OPERATING",
        value: "Quotations · Products · Purchase orders",
        meta: "mod",
      },
      { label: "IN BUILD", value: "Work orders · Payroll · Dashboards", meta: "wip" },
      {
        label: "ISOLATION",
        value: "Org-scoped queries · RLS on every business table",
        meta: "iso",
      },
      {
        label: "STACK",
        value: "Next.js · Neon Postgres · Drizzle · Better Auth",
        meta: "stk",
      },
    ],
    link: { label: "stream.corsw.in", href: "https://stream.corsw.in" },
  },
  {
    ordinal: "03",
    name: "ORDIO",
    status: "operating",
    tagline: "QR ordering and kitchen display for café counters.",
    description: [
      "A multi-tenant ordering platform for cafés and small restaurants. Each café is its own subdomain with its own menu and its own row-level security scope — a guest scans the QR on the table, orders from their own phone, and pays before the kitchen is given the ticket.",
      "Ordio runs the counter loop end to end: a menu with variants, add-ons and offers, a PhonePe checkout that gates the KOT, a kitchen display that polls for new tickets, A5 PDF receipts, and a receipt book a guest can reopen with their phone number. Currently operating one café in Solapur.",
    ],
    diagram: "ordio",
    diagramLabel: "ordio.v1",
    table: [
      {
        label: "TENANTS",
        value: "1 active · Cafe Sips N Bites, Solapur",
        meta: "tnt",
      },
      {
        label: "OPERATING",
        value: "Menu · Ordering · Payments · Kitchen display",
        meta: "mod",
      },
      {
        label: "PAYMENTS",
        value: "PhonePe pay-before-KOT · merchant KYC pending",
        meta: "pay",
      },
      {
        label: "STACK",
        value: "Next.js 16 · Neon Postgres · Drizzle · Better Auth",
        meta: "stk",
      },
    ],
    link: { label: "ordio.corsw.in", href: "https://ordio.corsw.in" },
  },
];
