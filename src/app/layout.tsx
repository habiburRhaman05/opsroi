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

export const metadata: Metadata = {
  title: "OpsROI - Own the Software Your Industry Runs On",
  description:
    "OpsROI partners with proven contractor founders to build the operating system for their industry. You bring the expertise. We build the platform. You own the market.",
  icons: {
    icon: [
      { type: "image/svg+xml", url: "/opsroi-icon.svg" },
      { type: "image/png", sizes: "32x32", url: "/favicon-32.png" },
      { type: "image/png", sizes: "512x512", url: "/favicon-512.png" },
    ],
    apple: "/apple-touch-icon.png",
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
