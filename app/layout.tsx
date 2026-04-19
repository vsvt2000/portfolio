import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Type definitions for portfolio data
interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
}

interface Meta {
  title: string;
  description: string;
  keywords: string[];
}

interface PortfolioData {
  meta: Meta;
  personalInfo: PersonalInfo;
  [key: string]: unknown;
}

// Dynamic metadata loader
async function getMetadata(): Promise<Metadata> {
  try {
    const data: PortfolioData = await import("@/data/portfolioData.json").then(
      (m) => m.default
    );
    return {
      title: data.meta.title,
      description: data.meta.description,
      keywords: data.meta.keywords,
      authors: [{ name: data.personalInfo.name }],
      openGraph: {
        title: data.meta.title,
        description: data.meta.description,
        type: "website",
      },
    };
  } catch {
    return {
      title: "Portfolio",
      description: "Product engineer specializing in GenAI and full-stack development.",
    };
  }
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata = await getMetadata();

  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
