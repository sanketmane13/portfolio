import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sanket Mane - Full-Stack Developer & Generative AI Engineer",
  description:
    "Portfolio of Sanket Mane — full-stack developer building RAG systems, MCP-based agent pipelines, and production SaaS with Next.js, FastAPI, and LangGraph.",
  keywords: [
    "Sanket Mane",
    "Full-Stack Developer",
    "Generative AI Engineer",
    "RAG",
    "LangChain",
    "LangGraph",
    "MCP",
    "Next.js",
    "FastAPI",
  ],
  metadataBase: new URL("https://sanketmane.dev"),
  openGraph: {
    title: "Sanket Mane — Full-Stack Developer & Generative AI Engineer",
    description:
      "Full-stack developer with hands-on RAG, MCP, and LangGraph experience. Explore projects, skills, and writing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try { var theme = localStorage.getItem("portfolio-theme"); document.documentElement.dataset.theme = theme === "light" ? "light" : "dark"; } catch (_) { document.documentElement.dataset.theme = "dark"; }',
          }}
        />
      </head>
      <body className="font-body bg-black text-text antialiased">
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
