import "@/styles/globals.css"
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { Footer } from "@/components/Footer";
import { SectionProjects } from "@/components/projectSection";
import { Contacts } from "@/components/ContactsSection";


const Home = (): JSX.Element => {
  return (
    <>
      <Header /> 
      <main className={`body`}>
        <HomeSection />
        <SectionProjects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
