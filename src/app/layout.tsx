import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Use Manrope instead of Inter
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A7 Laundry Orlando | Premium Wash & Fold with Free Pickup & Delivery",
  description:
    "A7 Laundry offers premium wash & fold, dry cleaning, and commercial laundry services in Winter Garden, Orlando with free pickup & delivery. Experience the difference!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
