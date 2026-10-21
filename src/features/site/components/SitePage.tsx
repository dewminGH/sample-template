import { About } from "./About";
import { Contact } from "./Contact";
import { DemoBanner } from "./DemoBanner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { Reviews } from "./Reviews";
import { TemplateNotice } from "./TemplateNotice";
import { Visit } from "./Visit";

export function SitePage() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Visit />
        <Reviews />
        <Contact />
        <TemplateNotice />
      </main>
      <Footer />
    </>
  );
}
