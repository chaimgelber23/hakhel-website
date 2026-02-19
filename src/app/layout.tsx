import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hakhel | Gathering Together for Torah & Wisdom",
    template: "%s | Hakhel",
  },
  description:
    "Torah resources, daily email archives, 300+ shiurim, gemach directory, and community programs — all free from Hakhel, serving the Jewish community since 1755.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
