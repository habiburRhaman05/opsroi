import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import ScrollRevealObserver from "@/src/components/ScrollRevealObserver";



const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpsROI - The AI-powered business operating system",
  description: "One platform to run pipelines, automate follow-ups, and measure ROI.",
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
        <ScrollRevealObserver />
        {children}
      </body>
    </html>
  );
}
