import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const Bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "EvolvIQ - AI-Enabled Self-Learning Platform",
  description:
    "EvolvIQ leverages AI to personalize and enhance your learning experience with adaptive, self-paced courses designed to evolve with your skills.",
  keywords: [
    "EvolvIQ",
    "AI learning platform",
    "self-learning",
    "adaptive learning",
    "personalized education",
    "online courses",
    "machine learning",
    "education technology",
  ],
  authors: [{ name: "Rohit Mishra", url: "https://rht21.xyz" }],
  openGraph: {
    title: "EvolvIQ - AI-Enabled Self-Learning Platform",
    description:
      "Personalized, AI-powered courses that evolve with your skills. Join EvolvIQ and transform your learning journey.",
    url: baseUrl,
    siteName: "EvolvIQ",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "EvolvIQ Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Bricolage.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
