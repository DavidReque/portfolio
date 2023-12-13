import About from "@/components/about";
import { Contact } from "@/components/contact";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="px-8 lg:px-0">
        <Menu/>
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
    </main>
  )
}
