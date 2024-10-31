import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/narbar/Narbar";
import Footer from "@/components/pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Dream Home Realty",
    default: "Dream Home Realty - Find Your Perfect Home",
  },
  description:
    "Discover your dream home with our extensive collection of properties. Expert real estate agents helping you find the perfect property.",
  keywords: [
    "real estate",
    "homes for sale",
    "property listings",
    "real estate agents",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dream Home Realty",
    description: "Find your perfect home with Dream Home Realty",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
