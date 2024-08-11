import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RootProviders from "@/components/providers/rootProviders";
import { connectDB } from "@/lib/db";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { Suspense } from "react";
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
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </RootProviders>
      </body>
    </html>
  );
}
