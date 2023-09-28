import { Header } from "../components/Header";
import { HomeSection } from "@/components/HomeSection";
import { Footer } from "@/components/Footer";
import { SectionProjects } from "@/components/SectionProjects";
import { Contats } from "@/components/ContactsSection";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="z-0 flex flex-col items-center justify-center mt-36">
        <HomeSection />
        <SectionProjects />
        <Contats />
      </main>
      <Footer />
    </>
  );
};

export default Home;
