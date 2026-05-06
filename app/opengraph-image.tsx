import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Modlio · Enterprise software that doesn't go down.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A0B0F",
          color: "#E8EAED",
          padding: "56px 64px",
          fontFamily: "Inter, system-ui, sans-serif",
          letterSpacing: "-0.02em",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="36" height="36" viewBox="0 0 24 24">
            <rect x="0" y="0" width="24" height="24" fill="#0A0B0F" />
            <rect x="4" y="14" width="16" height="6" fill="#E8EAED" />
            <rect x="4" y="6" width="10" height="6" fill="#E8EAED" />
            <rect x="4" y="6" width="6" height="6" fill="#3B82F6" />
          </svg>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#E8EAED",
              letterSpacing: "0",
            }}
          >
            MODLIO
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            top: 320,
            height: 1,
            background: "#3B82F6",
            opacity: 0.85,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: 80,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.02,
              color: "#E8EAED",
              letterSpacing: "-0.025em",
            }}
          >
            Enterprise software
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.02,
              color: "#E8EAED",
              letterSpacing: "-0.025em",
            }}
          >
            that doesn&rsquo;t go down.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono, ui-monospace, monospace",
            fontSize: 16,
            color: "#9CA3AF",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                background: "#10B981",
                display: "block",
              }}
            />
            <span>OPERATING · 4 SYSTEMS · 99.9% UPTIME</span>
          </div>
          <div>A DIVISION OF CORSW</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
