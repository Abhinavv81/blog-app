import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RootProviders from "@/components/providers/rootProviders";
import { connectDB } from "@/lib/db";
export const metadata: Metadata = {
  title: "Ken - Your Personal Blogging Haven",
  description:
    "Join our community of passionate writers and readers. Start your journey today and let your voice be heard.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectDB();
  return (
    <html lang="en">
      <body>
        <RootProviders>
          <Navbar />
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
