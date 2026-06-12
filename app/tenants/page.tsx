import type { Metadata } from "next";
import Link from "next/link";
import { Colophon } from "@/components/sections/Colophon";
import { DataTable } from "@/components/primitives/DataTable";
import { SectionMark } from "@/components/primitives/SectionMark";
import { SectionRule } from "@/components/primitives/SectionRule";
import { StatusBadge } from "@/components/primitives/StatusBadge";
import { pipeline, tenants, type Tenant } from "@/lib/tenants";

export const metadata: Metadata = {
  title: "Tenants — Modlio",
  description:
    "The tenant register of Arogyam, Modlio's healthcare platform. 1 tenant operating in production, 12 in onboarding pipeline.",
  openGraph: {
    title: "Tenants — Modlio",
    description:
      "The tenant register of Arogyam, Modlio's healthcare platform. 1 operating, 12 in onboarding pipeline.",
    url: "https://modlio.corsw.in/tenants",
    siteName: "Modlio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenants — Modlio",
    description:
      "The tenant register of Arogyam, Modlio's healthcare platform. 1 operating, 12 in onboarding pipeline.",
  },
};

export default function TenantsPage() {
  return (
    <main className="bg-bg text-ink">
      <section className="border-b border-ink-rule">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 pt-10 md:pt-12 pb-20 md:pb-28">
          <Link
            href="/"
            className="link-draw inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted hover:text-accent transition-colors"
          >
            &larr; MODLIO
          </Link>

          <div className="mt-16 md:mt-24">
            <div className="font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="text-ink">AROGYAM</span>
              <span className="mx-2 text-ink-faint">·</span>
              <span>TENANT REGISTER</span>
            </div>
            <h1
              className="mt-6 font-medium text-ink tracking-[-0.025em] leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
            >
              Tenants.
            </h1>
            <p className="mt-6 text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[60ch]">
              The tenants of Arogyam, Modlio&rsquo;s healthcare platform.{" "}
              <span className="text-ink tnum">1</span> operating in production,{" "}
              <span className="text-ink tnum">12</span> in onboarding pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-b border-ink-rule">
        <SectionMark />
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
            <div className="md:col-span-4">
              <SectionRule ordinal="01" label="TENANT REGISTER" />
              <h2
                className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Operating<br />tenants.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[60ch]">
                Each entry lists what runs in production for that tenant, as it
                runs today. Dates are deploy dates, labeled measured. Pipeline
                tenants appear here once they are operating.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            {tenants.map((t) => (
              <TenantEntry key={t.slug} tenant={t} />
            ))}
            <PipelineRow />
          </div>
        </div>
      </section>

      <section className="relative border-b border-ink-rule">
        <SectionMark />
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-24">
          <Colophon />
        </div>
      </section>
    </main>
  );
}

function TenantEntry({ tenant }: { tenant: Tenant }) {
  return (
    <article className="border-t border-ink-rule py-12 md:py-16">
      <div className="flex items-center justify-between gap-4">
        <div className="font-mono text-[12.5px] tnum">
          <span className="text-accent">{tenant.ordinal}</span>
          <span className="mx-2 text-ink-faint">/</span>
          <span className="text-ink uppercase tracking-[0.12em]">
            {tenant.slug}
          </span>
        </div>
        <StatusBadge status={tenant.status} />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
        <div className="lg:col-span-5">
          <h3
            className="font-medium text-ink tracking-[-0.02em] leading-[1.18]"
            style={{ fontSize: "clamp(1.375rem, 2.4vw, 1.75rem)" }}
          >
            {tenant.practitioner}
          </h3>
          <p className="mt-3 text-[14.5px] md:text-[15px] leading-[1.65] text-ink-muted">
            {tenant.practice}. {tenant.practiceType}.
          </p>

          <div className="mt-7">
            <DataTable
              caption={`${tenant.slug} tenant metadata`}
              labelWidth="9rem"
              rows={[
                { label: "TENANT", value: tenant.slug, meta: "tnt" },
                {
                  label: "LOCATION",
                  value: `${tenant.location.city} · ${tenant.location.state} · ${tenant.location.country}`,
                  meta: "loc",
                },
                {
                  label: "COORDINATES",
                  value: tenant.location.coordinates,
                  meta: "geo",
                },
                {
                  label: "LANGUAGES",
                  value: tenant.languages.join(" · "),
                  meta: `lng/${String(tenant.languages.length).padStart(2, "0")}`,
                },
                {
                  label: "LIVE SINCE",
                  value: tenant.liveSince,
                  meta: "measured",
                },
              ]}
            />
          </div>

          <div className="mt-7 flex justify-end">
            <a
              href={tenant.url.href}
              className="group inline-flex items-center gap-2 font-mono text-[12px] tnum text-ink-muted hover:text-accent transition-colors"
            >
              <span className="link-draw border-b border-ink-rule pb-0.5">
                {tenant.url.label}
              </span>
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-ink-rule bg-bg-card p-5 md:p-7">
            <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
              <span>MODULES IN PRODUCTION</span>
              <span className="tnum">
                {String(tenant.modules.length).padStart(2, "0")} modules
              </span>
            </div>
            <table className="mt-4 w-full font-mono tnum text-[12.5px] border-collapse">
              <caption className="sr-only">
                Platform modules in production for {tenant.slug}
              </caption>
              <tbody>
                {tenant.modules.map((m) => (
                  <tr
                    key={m.ordinal}
                    className="border-t border-ink-rule align-top last:border-b"
                  >
                    <td className="py-2.5 pr-4 text-accent" style={{ width: "2.5rem" }}>
                      {m.ordinal}.
                    </td>
                    <th
                      scope="row"
                      className="text-left font-normal text-ink py-2.5 pr-4"
                    >
                      {m.name}
                    </th>
                    <td className="py-2.5 text-ink-faint">{m.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
              DATA LAYER
            </div>
            <div className="mt-4">
              <DataTable
                caption={`${tenant.slug} data layer`}
                labelWidth="12rem"
                rows={tenant.dataLayer}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PipelineRow() {
  const last = pipeline.count + 1;
  return (
    <div className="border-t border-ink-rule py-8 md:py-10">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
        <div className="font-mono text-[12.5px] tnum">
          <span className="text-accent">
            02&ndash;{String(last).padStart(2, "0")}
          </span>
          <span className="mx-2 text-ink-faint">/</span>
          <span className="text-ink-muted uppercase tracking-[0.12em]">
            ONBOARDING PIPELINE
          </span>
        </div>
        <p className="font-mono text-[12px] tnum text-ink-faint">
          {pipeline.count} tenants in onboarding pipeline.{" "}
          {pipeline.note}
        </p>
      </div>
    </div>
  );
}
