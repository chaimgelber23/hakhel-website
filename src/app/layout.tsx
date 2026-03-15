import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Hakhel | Gathering Together for Torah & Wisdom",
    template: "%s | Hakhel",
  },
  description:
    "Torah resources, daily email archives, 300+ shiurim, gemach directory, and community programs — all free from Hakhel, serving the Jewish community since 1995.",
  keywords: [
    "Hakhel",
    "Torah",
    "daily email",
    "gemach",
    "shiurim",
    "Torah Anytime",
    "Brooklyn",
    "Jewish education",
    "community resources",
    "Torah resources",
    "halacha",
    "tefillah",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hakhel",
    title: "Hakhel | Gathering Together for Torah & Wisdom",
    description:
      "Torah resources, daily email archives, 300+ shiurim, gemach directory, and community programs — all free from Hakhel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakhel | Gathering Together for Torah & Wisdom",
    description:
      "Torah resources, daily email archives, 300+ shiurim, gemach directory, and community programs — all free from Hakhel.",
  },
  metadataBase: new URL("https://hakhel.info"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hakhel.info/#organization",
      name: "Hakhel",
      url: "https://hakhel.info",
      description:
        "A non-profit volunteer organization dedicated to Torah study, charitable acts, and proper mitzvah performance, serving the Jewish community since 1995.",
      foundingDate: "1995",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        addressCountry: "US",
      },
      telephone: "+1-718-523-3636",
      email: "mailto:hakhel@hakhel.info",
      sameAs: [
        "https://www.torahanytime.com/#/organization/hakhel",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://hakhel.info/#website",
      url: "https://hakhel.info",
      name: "Hakhel",
      publisher: { "@id": "https://hakhel.info/#organization" },
      description:
        "Torah resources, daily email archives, 300+ shiurim, 500+ gemach listings, and community programs — all free.",
    },
    {
      "@type": "ItemList",
      name: "Hakhel Programs & Resources",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Daily Torah Email Archives",
          url: "https://hakhel.info/daily-emails",
          description: "15+ years of curated Torah insights delivered daily to 15,000+ subscribers since 2005.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Torah Library",
          url: "https://hakhel.info/resources",
          description: "60+ free downloadable PDFs — learning schedules, tefillah aids, brachos charts, halacha guides.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Community Gemach Directory",
          url: "https://hakhel.info/gemach",
          description: "500+ free-loan services across Brooklyn, Lakewood, Monsey, Five Towns, and Queens.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Torah Shiurim & Recordings",
          url: "https://hakhel.info/shiurim",
          description: "300+ Torah lectures from Hakhel events featuring 60+ speakers on Torah Anytime.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Community Programs",
          url: "https://hakhel.info/programs",
          description: "Yarchei Kallah, Tefillin Awareness Project, V'Ani Tefilah Foundation, and more.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
