import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Ayan — AI Engineer & Independent Forward Deployed Engineer",
  description: "An AI Engineer who judges an AI agent by how much work it actually saves you. I build autonomous agents for lead generation, enrichment, and framework-driven outreach.",
  keywords: [
    "Mohammad Ayan",
    "AI Engineer",
    "Forward Deployed Engineer",
    "AI Agents",
    "Automation",
    "Python",
  ],
  authors: [{ name: "Mohammad Ayan" }],
  creator: "Mohammad Ayan",
  publisher: "Mohammad Ayan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohammad Ayan — AI Engineer & Independent Forward Deployed Engineer",
    description: "An AI Engineer who judges an AI agent by how much work it actually saves you. I build autonomous agents for lead generation, enrichment, and framework-driven outreach.",
    siteName: "Mohammad Ayan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Ayan — AI Engineer & Independent Forward Deployed Engineer",
    description: "An AI Engineer who judges an AI agent by how much work it actually saves you.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
