import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Industries />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
