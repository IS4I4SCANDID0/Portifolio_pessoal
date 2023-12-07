import { FaGithub } from "react-icons/fa";
import { Roboto_Flex } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { getProjectsList } from "@/lib/fetchData";

const raleway: NextFont = Roboto_Flex({
  subsets: ["latin"],
  weight: ["500"],
});




export const SectionProjects = async (): Promise<JSX.Element> => {
  const repos = await getProjectsList()  
  // console.log('test', typeof repos) 

  return (
    <>
      <div className={`w-full h-[0.15rem] custom-gradient`}></div>
      <section
        id="projetos"
        className="flex w-screen flex-col items-center justify-center bg-gray-950 py-14"
      >
        <div className="flex w-11/12 flex-col items-center justify-center gap-6 border-2 border-pink-400 lg:max-w-[1250px]">
          <h2 className="self-start text-3xl font-bold my-3">
            Meus projetos
          </h2>
          <p className="self-start text-sm lg:text-lg mb-10">
            Aqui estão meus principais projetos
          </p>
          <ul className="flex w-full flex-col gap-16 self-start py-7 md:self-center lg:grid lg:grid-cols-2">
            {repos &&
              repos?.map?.(({ id, name, language, html_url }, index) => (
                <li
                  className={`flex h-52 min-w-full max-w-full flex-col gap-10 self-center mt-5`}
                  key={id}
                >
                  <h2
                    className={`flex flex-col gap-4 self-start text-justify text-2xl font-semibold lg:flex-row-reverse lg:text-2xl ${
                      index === 0
                        ? `before:custom-gradient before:flex before:h-8 before:w-11 before:items-center before:justify-center
                          before:rounded-md before:text-base before:font-semibold before:text-gray-950 before:content-["New"]`
                        : ""
                    }`}
                  >
                    {name}
                  </h2>
                  {language ? (
                    <h3 className={`${raleway.className} text-zinc-400`}>
                      Linguagem Primária<span className="font-semibold">:</span> <span className="bg-zinc-900 p-2 rounded-md">{language}</span>
                    </h3>
                  ) : (
                    <h3 className={`${raleway.className} text-zinc-400`}>
                      Linguagem Primária: Linguagem primária não identificada
                    </h3>
                  )}
                  <div className={`flex max-w-fit items-center gap-2 text-zinc-400 hover:brightness-150 transition duration-150`}>
                    <FaGithub size={25} />
                    <a
                      className={`${raleway.className}`}
                      href={html_url}
                      target="_blank"
                    >
                      Ver código no GitHub
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};