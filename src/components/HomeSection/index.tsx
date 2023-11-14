"use client";
import { Stack } from "@/components/stack";
import { myStacks } from "@/utils/stacksMock";
import { StackCard } from "../stackCards";
import Image from "next/image";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// import { Letter } from 'react-awesome-reveal';

export const HomeSection = (): JSX.Element => {
  const title1: string = "Paixão";
  const title2: string = "por transformar ideias em realidade usando";
  const title3: string = "tecnologia";

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const animateVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25 },
    },
  };

  const splitText = (text: string, className: string = "") =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        className={className}
        variants={animateVariants}
        transition={{
          delay: index * 0.1,
          ease: "easeInOut",
          staggerChildren: 0.1,
        }}
        aria-hidden
      >
        {char}
      </motion.span>
    ));

  return (
    <section
      id="inicio"
      className="z-0 flex w-screen flex-col items-center justify-center border border-b-[0.15rem] border-purple-500 pb-16"
    >
      <div className="w-11/12 gap-2 self-center border border-yellow-300 lg:w-9/12">
        <div className="mb-8 flex w-full items-center gap-2 self-start border border-lime-400 md:w-2/3">
          <Image
            className="transition-brightness h-14 w-14  rounded-full duration-200 ease-in-out hover:brightness-75"
            src="https://github.com/IS4I4SCANDID0.png"
            alt="Isaias Candido"
            width={75}
            height={75}
          />
          <h3 className="text-sm font-medium md:text-base">
            Olá, bem-vindo ao meu universo de codificação
          </h3>
        </div>
        <motion.h1
          className="text-3xl inline-block font-bold leading-normal tracking-normal md:text-6xl"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.07 }}
          aria-hidden
        >
          <span className={`custom-text custom-gradient`}>
            {splitText(title1)}
          </span>{" "}
          <span>{splitText(title2)}</span>{" "}
          <span className={`custom-text custom-gradient`}>
            {splitText(title3)}
          </span>
        </motion.h1>
      </div>
      <Stack>
        {myStacks.map((stack, index) => (
          <StackCard key={index} title={stack.title!} icon={stack.img} />
        ))}
      </Stack>
    </section>
  );
};
