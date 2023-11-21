"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});

export const SectionProjects = (): JSX.Element => {
  const [repos, setRepos] = useState<IRepository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/IS4I4SCANDID0/repos?sort=created&direction=desc`,
      );

      const responseJson = await response.json();

      console.log(responseJson);
      setRepos(responseJson);

      return responseJson;
    };
    fetchData();
  }, []);

  

  return (
    <>
      <div className={`w-full h-[0.15rem] custom-gradient`}></div>
      <section
        id="projetos"
        className="static z-10 flex w-screen flex-col items-center justify-center bg-gray-950 py-14"
      >
        <div className="flex w-11/12 flex-col items-center justify-center gap-6 border border-red-600 lg:w-9/12">
          <h2 className="md:3xl xl:text-4xlxl self-start text-2xl font-bold">
            Meus projetos
          </h2>
          <p className="self-start text-base lg:text-xl xl:text-2xl">
            Aqui estão meus principais projetos
          </p>
          <ul className="flex w-full flex-col gap-16 self-start border border-yellow-400 py-7 md:self-center lg:grid lg:grid-cols-2">
            {repos &&
              repos?.map?.(({ id, name, language, html_url }, index) => (
                <li
                  className={`flex h-52 min-w-full max-w-full flex-col gap-4 self-center border-2 border-green-600`}
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
                      Linguagem Primária: {language}
                    </h3>
                  ) : (
                    <h3 className={`${raleway.className} text-zinc-400`}>
                      Linguagem Primária: Linguagem primária não identificada
                    </h3>
                  )}
                  <div className={`flex max-w-fit items-center gap-2 text-zinc-400 hover:brightness-150 transition duration-150`}>
                    <FaGithub size={20} />
                    <a
                      className={`${raleway.className}`}
                      href={html_url}
                      target="_blank"
                    >
                      Código no GitHub
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
