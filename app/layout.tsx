import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });
import RootProviders from "@/components/providers/rootProviders";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProviders>
          <Navbar />

          {children}
        </RootProviders>
      </body>
    </html>
  );
}
