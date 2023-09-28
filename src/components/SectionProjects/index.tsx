"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa"

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
    <section id="projetos" className="w-3/5 flex flex-col items-center justify-center z-0 py-20 gap-5">
      <h2 className="self-start font-bold text-3xl">Meus projetos</h2>
      <p className="self-start">Aqui estão alguns dos meus prinipais projetos</p>
      <ul className="w-full grid grid-cols-2 self-center gap-16 border border-white">
        {repos &&
          repos?.map?.((repository) => (
            <li className="h-52 flex flex-col gap-4 border-2 border-green-600 self-center" key={repository.id}>
              <h2 className="text-2xl font-semibold ">{repository.name}</h2>
              {repository.language ? (
                <h3 className="text-gray-400">Linguagem Primária: {repository.language}</h3>
              ) : (
                <h3 className="text-gray-400">Linguagem Primária: Linguagem primária não identificada</h3>
              )}
              <div className="flex gap-2 text-gray-400 hover:text-white transition-colors ease-linear delay-200">
                <FaGithub />
                <a href={repository.html_url} target="_blank">GitHub Code</a>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};