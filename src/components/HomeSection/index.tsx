"use client";
import { Stack } from "@/components/stack";
import { myStacks } from "@/utils/stacksMock";
import { StackCard } from "../stackCards";
import Image from "next/image";
import { LazyMotion, domAnimation, Variants, m, useInView } from "framer-motion";
import { MutableRefObject, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { TAnimatedTextProps } from "@/interface/animations.interrfaces";
import { useMediaScreen } from "@/hooks/screenMedia";

const typingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.08 } },
};

const AnimatedText = ({ text, el: Wrapper = "p" }: TAnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref: MutableRefObject<null> = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <LazyMotion features={domAnimation}>
      <Wrapper>
        <span className="sr-only">{text}</span>
        <m.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.08 }}
            aria-hidden
            className="leading-tight"
          >
          {textArray.map((line, lineIndex) => (
            <span className="block" key={`line_${lineIndex}`}>
              {line.split(" ").map((word, wordIndex) => (
                <span className="inline-block" key={`word_${wordIndex}`}>
                  {word.split("").map((char, charIndex) => (
                    <m.span
                      className="inline-block"
                      variants={typingVariants}
                      key={`char_${charIndex}`}>
                      {char}
                    </m.span>
                  ))}

                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </m.span>
      </Wrapper>
    </LazyMotion>
  );
};

export const HomeSection = (): JSX.Element => {
  const iPadStyle = useMediaScreen(820);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const animateText: string = "Paixão por transformar ideias em realidade usando tecnologia!";

  return (
    <section
      id="inicio"
      className={`z-0 flex w-[95%] max-h-max flex-col lg:w-full lg:img-projects-bg lg:bg-fixed lg:bg-right lg:bg-no-repeat bg-gray-i-900`}
    >
      <div
        className={`flex flex-col mt-44 max-w-full mx-auto lg:w-[85rem] lg:max-w-full lg:px-6`}
      >
        <div className="w-full flex flex-col mx-auto lg:max-w-[550px] xl:max-w-[690px] pb-7 lg:self-start lg:mx-0">
          <div className="max-w-full gap-2 self-center">
            <div className="mb-8 flex max-w-full items-center gap-2 self-start md:w-2/3">
              <Image
                className="transition-brightness h-14 w-14 rounded-full duration-200 ease-in-out hover:brightness-75"
                src="https://github.com/IS4I4SCANDID0.png"
                alt="Isaias Candido"
                width={75}
                height={75}
              />
              <h3 className="text-sm font-medium md:text-base tracking-[0.005rem]">
                Olá, bem-vindo ao meu universo de codificação
              </h3>
            </div>

            <h1 className={`text-3xl font-bold xl:text-5xl mb-10`}>
              <AnimatedText text={animateText} />
            </h1>
            <h6 className="text-sm lg:text-lg text-zinc-400 tracking-[0.005rem]">
              Explore minha jornada como Desenvolvedor Full-Stack, onde a
              inovação e a eficiência se encontram. Aprecie a experiência!
            </h6>
          </div>
          <div className="mt-4 flex min-w-full max-w-full flex-col items-center gap-8 lg:gap-6 self-center px-0 py-12 md:flex-row md:gap-5">
            <Link
              href="#projetos"
              className={`flex h-[50px] w-full items-center justify-center xl:min-w-max xl:max-w-[250px] lg:font-bold ${
                iPadStyle ? "w-[295px]" : ""
              } custom-gradient rounded-3xl text-center text-lg font-semibold text-gray-950 md:px-2`}
            >
              Ver projetos
            </Link>

            <Link
              href={"https://github.com/IS4I4SCANDID0/portifolio_pessoal_v2"}
              target="_blank"
              onClick={() => setIsClicked(true)}
              className={`h-[50px] w-full xl:max-w-[250px] ${
                iPadStyle ? "w-[295px]" : ""
              } flex items-center justify-center rounded-3xl border-2 border-white lg:min-w-fit text-center text-lg font-semibold md:px-4 ${
                isClicked
                  ? "bg-white text-lg font-medium text-gray-950"
                  : "bg-transparent"
              }`}
            >
              Ver código do portifólio
            </Link>
 
            <Link
              href={"https://github.com/IS4I4SCANDID0"}
              target="_blank"
              className={`flex h-[50px] w-full flex-row items-center justify-center gap-4 lg:gap-2 xl:gap-5 rounded-3xl border-2 border-white py-2 text-center text-lg font-semibold md:px-2 lg:px-1 xl:px-3 lg:max-w-fit xl:w-fit xl:max-w-[177px] ${
                iPadStyle ? "max-w-[195px]" : ""
              } lg:px-5 ${
                isClicked
                  ? "bg-white text-lg font-medium text-gray-950"
                  : "bg-transparent"
              }`}
              onClick={() => setIsClicked(true)}
            >
              GitHub
              <FaGithub size={30} />
            </Link>
          </div>
        <Stack>
          {myStacks.map((stack, index) => (
            <StackCard key={index} title={stack.title!} icon={stack.img} />
          ))}
        </Stack>
        </div>
      </div>
    </section>
  );
};