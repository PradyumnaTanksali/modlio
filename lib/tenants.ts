export type TenantStatus = "operating";

export type TenantModule = {
  ordinal: string;
  name: string;
  detail: string;
};

export type Tenant = {
  ordinal: string;
  slug: string;
  practitioner: string;
  practice: string;
  practiceType: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates: string;
  };
  languages: string[];
  status: TenantStatus;
  /** ISO date the tenant went live in production. Measured, not projected. */
  liveSince: string;
  url: { label: string; href: string };
  /** Platform modules running in production for this tenant. */
  modules: TenantModule[];
  /** Data-layer facts, sourced from the Arogyam deploy docs. */
  dataLayer: { label: string; value: string; meta?: string }[];
};

export const tenants: Tenant[] = [
  {
    ordinal: "01",
    slug: "drtanvis",
    practitioner: "Dr. Tanvi Chavan",
    practice: "Sports Rehab & Physiotherapy",
    practiceType: "Solo physiotherapy practice",
    location: {
      city: "Solapur",
      state: "Maharashtra",
      country: "India",
      coordinates: "17.6400 N / 75.8996 E",
    },
    languages: ["English", "Marathi"],
    status: "operating",
    liveSince: "2026-06-07",
    url: { label: "drtanvis.corsw.in", href: "https://drtanvis.corsw.in" },
    modules: [
      {
        ordinal: "01",
        name: "Public landing",
        detail: "Bilingual · 18-block JSON renderer",
      },
      { ordinal: "02", name: "Patient records", detail: "Tenant-scoped" },
      {
        ordinal: "03",
        name: "Casepapers",
        detail: "Append-only versioning",
      },
      {
        ordinal: "04",
        name: "Appointments",
        detail: "Availability scheduling",
      },
      { ordinal: "05", name: "WhatsApp inbox", detail: "Patient messaging" },
      { ordinal: "06", name: "Triage questionnaires", detail: "Intake" },
      {
        ordinal: "07",
        name: "Exercise programs",
        detail: "Patient recovery portal",
      },
      { ordinal: "08", name: "Blog CMS", detail: "Practice publishing" },
    ],
    dataLayer: [
      { label: "DATABASE", value: "Neon Postgres 17", meta: "db" },
      {
        label: "ROW-LEVEL SECURITY",
        value: "Enforced on 21 tenant-scoped tables",
        meta: "rls",
      },
      { label: "MIGRATIONS", value: "12 forward-only", meta: "mig" },
      {
        label: "COMPLIANCE",
        value: "DPDP Act 2023 consent records · append-only audit log",
        meta: "cmp",
      },
    ],
  },
];

/**
 * The onboarding pipeline is published as a count only.
 * Tenant names appear in the register once they are operating.
 */
export const pipeline = {
  count: 12,
  note: "Names published when operating.",
};
