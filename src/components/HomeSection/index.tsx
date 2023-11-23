"use client";
import { Stack } from "@/components/stack";
import { myStacks } from "@/utils/stacksMock";
import { StackCard } from "../stackCards";
import Image from "next/image";
import { LazyMotion, Variants, domAnimation, m, motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { TAnimatedTextProps } from "@/interface/animations.interrfaces";

const typingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const AnimatedText = ({ text, el: Wrapper = "p", animateVariants }: TAnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <Wrapper>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
        className="leading-tight"
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`line-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`word-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span className="inline-block" variants={animateVariants} key={`char-${charIndex}`}>{char}</motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>  
            ))} 
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export const HomeSection = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const animateText: string = "Paixão por transformar ideias em realidade usando tecnologia";

  return (
    <section
      id="inicio"
      className={`lg:img-projects-bg z-0 flex w-screen flex-col pb-4 lg:mt-0 lg:bg-fixed lg:bg-right lg:bg-no-repeat lg:pt-36`}
    >
      <section className="flex flex-col items-center justify-center lg:ml-56 lg:w-1/2">
        <div className="w-11/12 gap-2 self-center lg:w-full">
          <div className="mb-8 flex w-full items-center gap-2 self-start md:w-2/3">
            <Image
              className="transition-brightness h-14 w-14 rounded-full duration-200 ease-in-out hover:brightness-75"
              src="https://github.com/IS4I4SCANDID0.png"
              alt="Isaias Candido"
              width={75}
              height={75}
            />
            <h3 className="text-sm font-medium md:text-base ">
              Olá, bem-vindo ao meu universo de codificação
            </h3>
          </div>

          <h1 className={`min-h-max text-3xl font-bold md:text-6xl custom-text custom-gradient`}>
            <AnimatedText text={animateText} animateVariants={typingVariants}/>
          </h1>
        </div>
        <div className="flex w-11/12 flex-col items-center justify-center gap-5 py-12 mt-4 md:flex-row lg:w-full">
          <Link
            href="#projetos"
            className={`custom-gradient w-full rounded-3xl py-2 text-center text-lg font-semibold text-gray-950`}
          >
            Ver projetos
          </Link>

          <Link
            href={"https://github.com/IS4I4SCANDID0/portifolio_pessoal_v2"}
            target="_blank"
            className={`w-full rounded-3xl border-2 border-white py-2 text-center text-lg font-normal ${isClicked ? "bg-white text-gray-950" : "bg-transparent"}`}
          >
            Ver código do portifólio
          </Link>

          <Link
            href={"https://github.com/IS4I4SCANDID0"}
            target="_blank"
            className="flex w-full flex-row items-center justify-center gap-4 rounded-3xl border-2 border-white py-2 text-center text-lg font-normal  lg:max-w-fit lg:px-5"
            onClick={() => setIsClicked(true)}
          >
            Ver GitHub
            <FaGithub size={30} />
          </Link>
        </div>
        <Stack>
          {myStacks.map((stack, index) => (
            <StackCard key={index} title={stack.title!} icon={stack.img} />
          ))}
        </Stack>
      </section>
    </section>
  );
};

// function MyComponent() {
//   const [isClicked, setIsClicked] = useState(false);

//   return (
//     <Link
//       href={"https://github.com/IS4I4SCANDID0/portifolio_pessoal_v2"}
//       target="_blank"
//       className={`w-full py-2 text-center rounded-2xl text-lg border-2 border-white font-medium ${isClicked ? 'bg-white' : ''}`}
//       onClick={() => setIsClicked(true)}
//     >
//       Ver código fonte do portifólio
//     </Link>
//   );
// }
