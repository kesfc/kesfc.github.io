import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Weihao Li | 李伟豪",
  description:
    "The personal portfolio of Weihao Li — research, software, teaching, golf, and the space in between.",
  keywords: [
    "Weihao Li",
    "machine learning",
    "clinical NLP",
    "medical coding",
    "Northwestern University",
  ],
  authors: [{ name: "Weihao Li" }],
  openGraph: {
    title: "Weihao Li | 李伟豪",
    description:
      "Ideas, experiments, and things I've built.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Weihao Li",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weihao Li | 李伟豪",
    description: "Ideas, experiments, and things I've built.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
