import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Menu } from "@/app/components/Menu";
import { Locations } from "@/app/components/Locations";
import { FAQ } from "@/app/components/FAQ";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Locations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
