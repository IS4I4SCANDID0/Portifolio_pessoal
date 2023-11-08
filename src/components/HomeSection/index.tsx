"use client"
import { Stack } from "@/components/stack";
import { myStacks } from "@/utils/stacksMock";
import { StackCard } from "../stackCards";
import Image from "next/image";


export const HomeSection = (): JSX.Element => {
  return (
    <section id="inicio" className="w-screen flex flex-col items-center justify-center z-0 border-b-4 pb-16 mt-40">
      <div className=" w-3/5 self-center gap-8 border border-yellow-300">
        <div className="flex w-2/3 items-center gap-5 self-start border border-lime-400 mb-8">
          <Image
            className="transition-brightness h-14 w-14  rounded-full duration-200 ease-in-out hover:brightness-75"
            src="https://github.com/IS4I4SCANDID0.png"
            alt="Isaias Candido"
            width={75}
            height={75}
          />
          <h3 className="text-xl font-medium">
            Olá, bem-vindo ao meu universo de codificação
          </h3>
        </div>
        <h1 className="text-6xl font-bold leading-tight tracking-normal">
          Unindo <span className="text-blue-700">tecnologia</span> e{" "}
          <span className="text-blue-700">criatividade</span> transformo
          ideias em realidade através do{" "}
          <span className="text-blue-700">desenvolvimento</span> web
        </h1>
        </div>
        <Stack>
          {myStacks.map((stack, index) => (
            <StackCard key={index} title={stack.title!} icon={stack.img}/>
          ))}
        </Stack> 
    </section>
  );
};