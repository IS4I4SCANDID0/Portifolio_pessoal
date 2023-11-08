"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export const SectionProjects = (): JSX.Element => {
  const [repos, setRepos] = useState<IRepository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/IS4I4SCANDID0/repos?sort=created&direction=desc`,
      );

      const responseJson = await response.json();

      setRepos(responseJson);

      return responseJson;
    };
    fetchData();
  }, []);

  return (
    <section
      id="projetos"
      className="z-0 flex w-10/12 flex-col items-center justify-center gap-5 bg-orange-300 py-20 md:w-3/5"
    >
      <h2 className="self-start text-3xl font-bold">Meus projetos</h2>
      <p className="self-start">
        Aqui estão alguns dos meus prinipais projetos
      </p>
      <ul className="grid w-full grid-cols-2 gap-16 self-center border border-white">
        {repos &&
          repos?.map?.(({ id, name, language, html_url }) => (
            <li
              className="flex h-52 flex-col gap-4 self-center border-2 border-green-600"
              key={id}
            >
              <h2 className="text-2xl font-semibold ">{name}</h2>
              {language ? (
                <h3 className="text-gray-400">
                  Linguagem Primária: {language}
                </h3>
              ) : (
                <h3 className="text-gray-400">
                  Linguagem Primária: Linguagem primária não identificada
                </h3>
              )}
              <div className="hover:text-gradient-to-r flex gap-2 from-green-400 to-blue-500 text-gray-400 transition-colors delay-200 ease-linear">
                <FaGithub className="" />
                <a href={html_url} target="_blank">
                  GitHub Code
                </a>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
