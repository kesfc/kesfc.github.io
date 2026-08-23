import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kesfc.github.io",
);
const pageTitle = "Weihao Li — Homepage";
const description =
  "Weihao Li's personal homepage — research in AI agents and clinical language models, software projects, teaching, and varsity golf.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: pageTitle,
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Weihao Li",
    "李伟豪",
    "machine learning",
    "clinical NLP",
    "medical coding",
    "Northwestern University",
  ],
  authors: [{ name: "Weihao Li" }],
  creator: "Weihao Li",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description,
    type: "website",
    url: "/",
    siteName: "Weihao Li",
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
    title: pageTitle,
    description,
    images: ["/og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Weihao Li",
      alternateName: ["Weihao Li Homepage", "李伟豪"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Weihao Li",
      alternateName: "李伟豪",
      url: siteUrl,
      sameAs: [
        "https://github.com/kesfc",
        "https://openreview.net/profile?id=~Weihao_Li10",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
