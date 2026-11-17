import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";
import { SITE_URL, SITE_NAME, SITE_DESC } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — je sais quoi faire aujourd’hui`, template: `%s · ${SITE_NAME}` },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: ["entraînement trail", "plan trail", "charge d'entraînement", "préparation ultra", "check-in récupération"],
  alternates: { canonical: "./" },
  openGraph: { type: "website", locale: "fr_FR", siteName: SITE_NAME, url: "./" },
  twitter: { card: "summary_large_image" },
  appleWebApp: { capable: true, title: SITE_NAME, statusBarStyle: "black-translucent" },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: "#0b0b2b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="night" suppressHydrationWarning>
      <head>
        {/* V3 : thème nuit unique, plus de choix clair/sombre. */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
