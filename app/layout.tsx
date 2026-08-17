import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Pixel-Rentner Gaming Community", template: "%s | Pixel-Rentner" },
  description: "Zocken kennt kein Alter: Pixel-Rentner für Counter-Strike 2, SCUM und die Emergency-20-Lüdenscheid-Modifikation.",
  icons: {
    icon: [{ url: "/pixel-rentner-favicon.png", type: "image/png" }],
    shortcut: "/pixel-rentner-favicon.png",
    apple: "/pixel-rentner-favicon.png",
  },
  openGraph: {
    title: "Pixel-Rentner Gaming Community",
    description: "Zocken kennt kein Alter.",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/og-pixel-rentner.png", width: 1536, height: 1024, alt: "Pixel-Rentner Gaming Community" }],
  },
  twitter: { card: "summary_large_image", title: "Pixel-Rentner Gaming Community", description: "Zocken kennt kein Alter.", images: ["/og-pixel-rentner.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
