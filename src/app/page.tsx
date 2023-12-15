import About from "@/components/about";
import StarsCanvas from "@/components/canvas/Stars";
import { Contact } from "@/components/contact";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <Menu />
      <div className="px-8 lg:px-0">
        <div className="relative z-0">
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Work />
        <div className="relative z-0 py-16">
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </main>
  );
}
