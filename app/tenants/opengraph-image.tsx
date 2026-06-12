import { ImageResponse } from "next/og";

export const alt = "Tenants — Modlio";
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
          <svg width="36" height="36" viewBox="0 0 64 64">
            <rect width="64" height="64" fill="#0A0B0F" />
            <rect x="8" y="44" width="48" height="12" fill="#E8EAED" />
            <rect x="8" y="28" width="32" height="12" fill="#E8EAED" />
            <rect x="8" y="12" width="20" height="12" fill="#E8EAED" />
            <rect x="8" y="12" width="12" height="12" fill="#3B82F6" />
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
            width: size.width - 128,
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
            Tenants.
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#9CA3AF",
              letterSpacing: "-0.015em",
              marginTop: 20,
            }}
          >
            The Arogyam tenant register.
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
            <span>1 OPERATING · 12 IN PIPELINE</span>
          </div>
          <div>AROGYAM · A MODLIO PLATFORM</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
