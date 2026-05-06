"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

type Phase = {
  ordinal: string;
  title: string;
  duration: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    ordinal: "01",
    title: "DISCOVERY",
    duration: "2 weeks",
    body: "Read the problem. Talk to operators. Specifically. No discovery deck.",
  },
  {
    ordinal: "02",
    title: "ARCHITECTURE",
    duration: "2 weeks",
    body: "Decide on the shape of the system before a single line is committed.",
  },
  {
    ordinal: "03",
    title: "BUILD",
    duration: "8–16 weeks",
    body: "Ship in two-week increments. Each two-weeks ends with production code.",
  },
  {
    ordinal: "04",
    title: "OPERATE",
    duration: "ongoing",
    body: "Run, monitor, extend. SLOs are real. We don't hand off.",
  },
];

export function PhaseFlowDiagram() {
  const reduced = useReducedMotion();
  const titleId = useId();
  const descId = useId();

  return (
    <div>
      <svg
        viewBox="0 0 1200 220"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        className="w-full h-auto hidden md:block font-mono"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={titleId}>Modlio methodology phase flow</title>
        <desc id={descId}>
          Four phases connected left to right by electric-blue arrows:
          Discovery, Architecture, Build, Operate.
        </desc>

        {PHASES.map((p, i) => {
          const x = 24 + i * 296;
          const y = 28;
          const w = 256;
          const h = 124;
          const next = i < PHASES.length - 1;
          return (
            <g key={p.ordinal}>
              <motion.g
                initial={reduced ? false : { opacity: 0, y: 4 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  fill="#111317"
                  stroke="#9CA3AF"
                  strokeOpacity={0.55}
                  strokeWidth={0.75}
                />
                <text
                  x={x + 16}
                  y={y + 22}
                  className="fill-accent"
                  style={{ fontSize: 11, letterSpacing: 1.2 }}
                >
                  PHASE {p.ordinal}
                </text>
                <text
                  x={x + 16}
                  y={y + 50}
                  className="fill-ink"
                  style={{ fontSize: 16, fontWeight: 500, letterSpacing: 0.6 }}
                >
                  {p.title}
                </text>
                <text
                  x={x + 16}
                  y={y + 68}
                  className="fill-ink-faint"
                  style={{ fontSize: 10, letterSpacing: 0.4 }}
                >
                  {p.duration}
                </text>
                <line
                  x1={x + 16}
                  y1={y + 80}
                  x2={x + w - 16}
                  y2={y + 80}
                  stroke="#1F2228"
                  strokeWidth={1}
                />
                <foreignObject
                  x={x + 16}
                  y={y + 86}
                  width={w - 32}
                  height={h - 92}
                >
                  <div
                    className="text-ink-muted"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      lineHeight: 1.5,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {p.body}
                  </div>
                </foreignObject>
              </motion.g>

              {next && (
                <motion.g
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={
                    reduced ? undefined : { pathLength: 1, opacity: 1 }
                  }
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45 + i * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <motion.line
                    x1={x + w}
                    y1={y + h / 2}
                    x2={x + w + 36}
                    y2={y + h / 2}
                    stroke="#3B82F6"
                    strokeWidth={1}
                  />
                  <motion.path
                    d={`M ${x + w + 32} ${y + h / 2 - 4} L ${x + w + 38} ${
                      y + h / 2
                    } L ${x + w + 32} ${y + h / 2 + 4}`}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth={1}
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>

      <div className="md:hidden flex flex-col">
        {PHASES.map((p, i) => (
          <div key={p.ordinal} className="relative">
            <div className="border border-ink-rule bg-bg-card p-5 font-mono">
              <div className="flex items-baseline gap-2 text-[11px] tracking-[0.12em] text-accent">
                PHASE {p.ordinal}
              </div>
              <div className="mt-2 text-base font-medium tracking-wide text-ink">
                {p.title}
              </div>
              <div className="mt-1 text-[11px] text-ink-faint">{p.duration}</div>
              <div className="mt-3 border-t border-ink-rule pt-3 font-sans text-[12.5px] leading-relaxed text-ink-muted">
                {p.body}
              </div>
            </div>
            {i < PHASES.length - 1 && (
              <div
                aria-hidden
                className="mx-auto my-2 h-6 w-px bg-accent"
                style={{ opacity: 0.6 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
