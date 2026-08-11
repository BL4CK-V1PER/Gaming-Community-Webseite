import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: {
      default: "NEXUS Gaming Community",
      template: "%s | NEXUS",
    },
    description: "Eine Gaming-Community für Counter-Strike 2 und SCUM.",
    openGraph: {
      title: "NEXUS Gaming Community",
      description: "Dein Squad. Dein Server. Deine Community.",
      type: "website",
      locale: "de_DE",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "NEXUS Gaming Community" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "NEXUS Gaming Community",
      description: "Dein Squad. Dein Server. Deine Community.",
      images: ["/og.png"],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
