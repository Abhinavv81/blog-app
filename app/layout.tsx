import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RootProviders from "@/components/providers/rootProviders";
import { connectDB } from "@/lib/db";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Ken - Your Personal Blogging Haven",
  description:
    "Join our community of passionate writers and readers. Start your journey today and let your voice be heard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDB();
  return (
    <html lang="en">
      <body>
        <RootProviders>
          <Navbar />
          {children}
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
