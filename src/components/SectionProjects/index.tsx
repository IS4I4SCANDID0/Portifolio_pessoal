"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Monda, Raleway } from "next/font/google";

const monda = Monda({
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
    <section
      id="projetos"
      className="flex w-screen flex-col items-center justify-center bg-gray-950 py-14 static z-10"
    >
      <div className="flex w-11/12 flex-col items-center justify-center gap-6 border border-red-600 lg:w-9/12">
        <h2 className="self-start text-2xl md:3xl font-bold xl:text-4xlxl">
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
                <h2 className={`text-lg  text-justify font-semibold lg:text-2xl flex flex-col lg:flex-row-reverse self-start gap-4 ${
                  index === 0
                    ? `before:custom-gradient before:flex before:text-gray-950 before:font-semibold before:text-base before:content-["New"]
                      before:justify-center before:items-center before:w-11 before:h-8 before:rounded-md`
                    : ""
                }`}>{name}</h2>
                {language ? (
                  <h3 className={`${monda.className} text-gray-400`}>
                    Linguagem Primária: {language}
                  </h3>
                ) : (
                  <h3 className={`${monda.className} text-gray-400`}>
                    Linguagem Primária: Linguagem primária não identificada
                  </h3>
                )}
                <div className={`flex items-center gap-2 text-gray-400`}>
                  <FaGithub size={20} />
                  <a
                    className={`${monda.className} hover:custom-text hover:custom-gradient transition duration-150`}
                    href={html_url}
                    target="_blank"
                  >
                    GitHub Code
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
