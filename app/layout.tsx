import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "NEXUS Gaming Community", template: "%s | NEXUS" },
  description: "Eine Gaming-Community für Counter-Strike 2 und SCUM.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "NEXUS Gaming Community",
    description: "Eine Community. Zwei Welten.",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "NEXUS Gaming Community Portal" }],
  },
  twitter: { card: "summary_large_image", title: "NEXUS Gaming Community", description: "Eine Community. Zwei Welten.", images: ["/og-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
