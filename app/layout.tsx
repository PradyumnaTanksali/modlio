import type { Metadata, Viewport } from "next";
import { sans, mono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://modlio.corsw.in"),
  title: "Modlio · Enterprise software that doesn't go down.",
  description:
    "Modlio is the enterprise product division of Corner Software. We build long-running, high-stakes platforms in healthcare, fintech, and IoT. A division of Corsw.",
  applicationName: "Modlio",
  authors: [{ name: "Modlio engineering team" }],
  creator: "Corner Software Pvt. Ltd.",
  publisher: "Corner Software Pvt. Ltd.",
  keywords: [
    "enterprise software",
    "healthcare platform",
    "DPDP",
    "ABDM",
    "Corner Software",
    "Modlio",
    "Arogyam",
  ],
  openGraph: {
    title: "Modlio · Enterprise software that doesn't go down.",
    description:
      "Long-running, high-stakes platforms — healthcare, fintech, IoT. A division of Corner Software.",
    url: "https://modlio.corsw.in",
    siteName: "Modlio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modlio · Enterprise software that doesn't go down.",
    description:
      "Long-running, high-stakes platforms — healthcare, fintech, IoT. A division of Corner Software.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/monogram.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
