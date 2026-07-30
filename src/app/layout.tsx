import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ScrollRevealObserver from "@/src/components/layout/ScrollRevealObserver";
import MouseEffects from "@/src/components/layout/MouseEffects";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://opsroi.com";
const SITE_TITLE = "OpsROI - Own the Software Your Industry Runs On";
const SITE_DESCRIPTION =
  "OpsROI partners with proven contractor founders to build the operating system for their industry. You bring the expertise. We build the platform. You own the market.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { type: "image/png", sizes: "32x32", url: "/favicon-32.png" },
      { type: "image/png", sizes: "512x512", url: "/favicon-512.png" },
    ],
    apple: "/favicon-512.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "OpsROI",
    images: [
      {
        url: "/favicon-512.png",
        width: 512,
        height: 512,
        alt: "OpsROI",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/favicon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body">
        <ScrollProgress />
        <ScrollRevealObserver />
        <MouseEffects />
           <Header />
        {children}
            <Footer />
      </body>
    </html>
  );
}
