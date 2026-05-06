"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

type Box = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: boolean;
};

type Connector = {
  from: string;
  to: string;
  via?: { x: number; y: number }[];
  arrow?: boolean;
};

const BOXES: Box[] = [
  { id: "web", x: 24, y: 32, w: 156, h: 52, label: "Web", sub: "Next.js" },
  { id: "wa", x: 24, y: 116, w: 156, h: 52, label: "WhatsApp", sub: "Gupshup" },
  { id: "api", x: 232, y: 76, w: 156, h: 52, label: "API", sub: "tRPC", accent: true },
  { id: "ws", x: 232, y: 168, w: 156, h: 52, label: "Rust WS sidecar", sub: "Axum · Tokio" },
  { id: "lg", x: 232, y: 252, w: 156, h: 52, label: "Python LangGraph", sub: "RAG · evals" },
  { id: "pg", x: 440, y: 32, w: 156, h: 52, label: "Postgres", sub: "RLS · pgcrypto" },
  { id: "pgv", x: 440, y: 116, w: 156, h: 52, label: "pgvector", sub: "embeddings" },
  { id: "abdm", x: 440, y: 252, w: 156, h: 52, label: "ABDM", sub: "Sandbox · M2" },
];

const CONNECTORS: Connector[] = [
  { from: "web", to: "api" },
  { from: "wa", to: "api" },
  { from: "api", to: "pg" },
  { from: "api", to: "pgv" },
  { from: "api", to: "ws", via: [{ x: 310, y: 102 }, { x: 310, y: 194 }] },
  { from: "api", to: "lg", via: [{ x: 310, y: 102 }, { x: 310, y: 278 }] },
  { from: "lg", to: "abdm" },
  { from: "lg", to: "pgv", via: [{ x: 412, y: 278 }, { x: 412, y: 142 }] },
];

type Annotation = { x: number; y: number; text: string };

const ANNOTATIONS: Annotation[] = [
  { x: 310, y: 24, text: "multi-tenant via RLS" },
  { x: 310, y: 332, text: "bilingual MR / EN / HI" },
  { x: 532, y: 332, text: "DPDP-native" },
];

const VIEWBOX_W = 620;
const VIEWBOX_H = 360;

function boxById(id: string) {
  const b = BOXES.find((b) => b.id === id);
  if (!b) throw new Error(`box ${id} missing`);
  return b;
}

function pathFor(c: Connector): string {
  const from = boxById(c.from);
  const to = boxById(c.to);
  const start = anchor(from, to);
  const end = anchor(to, from);
  const pts: { x: number; y: number }[] = [start, ...(c.via ?? []), end];
  return pts
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");
}

function anchor(self: Box, other: Box) {
  const sx = self.x + self.w / 2;
  const sy = self.y + self.h / 2;
  const ox = other.x + other.w / 2;
  const oy = other.y + other.h / 2;
  const dx = ox - sx;
  const dy = oy - sy;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return {
      x: dx > 0 ? self.x + self.w : self.x,
      y: self.y + self.h / 2,
    };
  }
  return {
    x: self.x + self.w / 2,
    y: dy > 0 ? self.y + self.h : self.y,
  };
}

export function ArogyamDiagram() {
  const reduced = useReducedMotion();
  const titleId = useId();
  const descId = useId();

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className="w-full h-auto block font-mono"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={titleId}>Arogyam architecture</title>
      <desc id={descId}>
        A schematic system diagram of Arogyam. A Next.js web client and Gupshup
        WhatsApp gateway both reach a tRPC API. The API talks to Postgres with
        row-level security, pgvector embeddings, a Rust Axum WebSocket sidecar,
        and a Python LangGraph orchestrator. LangGraph reaches pgvector and the
        ABDM sandbox.
      </desc>

      {ANNOTATIONS.map((a, i) => (
        <text
          key={i}
          x={a.x}
          y={a.y}
          textAnchor="middle"
          className="fill-ink-faint"
          style={{ fontSize: 9.5, letterSpacing: 0.4 }}
        >
          {a.text}
        </text>
      ))}

      {CONNECTORS.map((c, i) => (
        <motion.path
          key={`${c.from}-${c.to}-${i}`}
          d={pathFor(c)}
          fill="none"
          stroke="#3B82F6"
          strokeWidth={1}
          strokeLinecap="square"
          strokeLinejoin="miter"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1.0,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4 + i * 0.08,
          }}
        />
      ))}

      {CONNECTORS.map((c, i) => {
        const to = boxById(c.to);
        const from = boxById(c.from);
        const tip = anchor(to, from);
        return (
          <motion.circle
            key={`tip-${c.from}-${c.to}-${i}`}
            cx={tip.x}
            cy={tip.y}
            r={1.6}
            fill="#3B82F6"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={reduced ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.3,
              delay: 0.4 + i * 0.08 + 0.85,
            }}
          />
        );
      })}

      {BOXES.map((b, i) => (
        <motion.g
          key={b.id}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
        >
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill="#111317"
            stroke={b.accent ? "#3B82F6" : "#9CA3AF"}
            strokeWidth={b.accent ? 1 : 0.75}
            strokeOpacity={b.accent ? 1 : 0.55}
          />
          <text
            x={b.x + 12}
            y={b.y + 22}
            className="fill-ink"
            style={{ fontSize: 12, fontWeight: 500 }}
          >
            {b.label}
          </text>
          {b.sub && (
            <text
              x={b.x + 12}
              y={b.y + 38}
              className="fill-ink-faint"
              style={{ fontSize: 10, letterSpacing: 0.3 }}
            >
              {b.sub}
            </text>
          )}
          {b.accent && (
            <rect
              x={b.x + b.w - 6}
              y={b.y + 4}
              width={2}
              height={6}
              fill="#3B82F6"
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}
