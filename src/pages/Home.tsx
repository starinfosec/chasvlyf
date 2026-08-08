import { Certifications } from "../components/Certifications";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Timeline } from "../components/Timeline";
import { Wholesale } from "../components/Wholesale";
import { VideoSection } from "../components/VideoSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { useReveal } from "../utils/useReveal";

export function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <Products />
      <section className="w-full h-[40vh] md:h-[60vh] relative">
        <img 
          src="/home.png" 
          alt="Natural Ingredients" 
          className="w-full h-full object-cover"
        />
      </section>
      <WhyChooseUs />
      <VideoSection />
      <Timeline />
      <Certifications />
      <Wholesale />
    </main>
  );
}

