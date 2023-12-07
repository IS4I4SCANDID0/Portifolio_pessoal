import "@/styles/globals.css"
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { Footer } from "@/components/Footer";
import { SectionProjects } from "@/components/projectSection";
import { Contacts } from "@/components/ContactsSection";
import {  IGetStaticRepos, IRepository } from "@/interface/project.interface";


const Home = ({ repos }: IGetStaticRepos): JSX.Element => {
  return (
    <>
      <Header /> 
      <main className={`body z-10 pt-36 lg:pt-0`}>
        <HomeSection />
        <SectionProjects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
