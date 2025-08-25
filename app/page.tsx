import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AudiencesSection from "@/components/AudiencesSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AudiencesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
