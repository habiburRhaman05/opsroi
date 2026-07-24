import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import ScrollRevealObserver from "@/src/components/ScrollRevealObserver";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";



const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
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
      className={` ${roboto.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-roboto">
        <ScrollProgress />
        <ScrollRevealObserver />
           <Header />
        {children}
            <Footer />
      </body>
    </html>
  );
}
