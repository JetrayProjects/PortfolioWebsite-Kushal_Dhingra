import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import CV from "@/components/CV";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <Work />
      <CV />
      <About />
      <Contact />
    </main>
  );
}
