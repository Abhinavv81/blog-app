import Image from "next/image";
import Navbar from "./_components/Navbar";
import LandingPageText from "./_components/LandingPageText";
import { ModeToggle } from "@/components/Mode-theme";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPageText />
      <Footer />
    </>
  );
}
