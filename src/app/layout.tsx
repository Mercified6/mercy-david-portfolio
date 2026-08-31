import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mercy David - Product Engineer & UI/UX Designer",
  description:
    "I design intuitive user experiences and build AI-powered digital products.",
  openGraph: {
    title: "Mercy David - Product Engineer & UI/UX Designer",
    description:
      "I design intuitive user experiences and build AI-powered digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
