import "@/styles/globals.css"
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { Footer } from "@/components/Footer";
import { SectionProjects } from "@/components/SectionProjects";
import { Contats } from "@/components/ContactsSection";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={`body .relative z-0 pt-36`}>
        <HomeSection />
        <SectionProjects />
        <Contats />
      </main>
      <Footer />
    </>
  );
};

export default Home;
