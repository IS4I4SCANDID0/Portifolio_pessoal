"use client";
import { Stack } from "@/components/stack";
import { myStacks } from "@/utils/stacksMock";
import { StackCard } from "../stackCards";
import Image from "next/image";
import {
  LazyMotion,
  Variants,
  domAnimation,
  m,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useRef, useState } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <Wrapper>
      <span className="sr-only">{text}</span>
      <motion.span
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
                  <motion.span
                    className="inline-block"
                    variants={typingVariants}
                    key={`char_${charIndex}`}
                  >
                    {char}
                  </motion.span>
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
  const iPAdStyle = useMediaScreen(820);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const animateText: string =
    "Paixão por transformar ideias em realidade usando tecnologia";

  return (
    <section
      id="inicio"
      className={`lg:img-projects-bg z-0 flex w-screen flex-col pb-4 lg:mt-0 lg:bg-fixed lg:bg-right lg:bg-no-repeat lg:pt-36`}
    >
      <section className="flex flex-col items-center justify-center border-2 border-red-600 lg:max-w-[1250px] lg:self-center">
        <div className="flex max-w-[91.666667%] flex-col self-center border-2 border-blue-500 lg:max-w-[60%] lg:self-start">
          <div className="w-full gap-2 self-center">
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

            <h1 className={`text-3xl font-bold md:text-6xl`}>
              <AnimatedText text={animateText} />
            </h1>
          </div>
          <div className="mt-4 flex w-full flex-col items-center gap-5 self-center border-2 border-orange-600 px-0 py-12 md:flex-row">
            <Link
              href="#projetos"
              className={`flex h-[40px] w-full items-center justify-center md:h-[45px] lg:min-w-[260px] lg:max-w-[260px] ${
                iPAdStyle ? "w-[295px]" : ""
              } custom-gradient rounded-3xl text-center text-lg font-medium text-gray-950 md:px-2`}
            >
              Ver projetos
            </Link>

            <Link
              href={"https://github.com/IS4I4SCANDID0/portifolio_pessoal_v2"}
              target="_blank"
              onClick={() => setIsClicked(true)}
              className={`h-[40px] w-full md:h-[45px] lg:min-w-[260px]  lg:max-w-[264px] ${
                iPAdStyle ? "w-[295px]" : ""
              } flex items-center justify-center rounded-3xl border-2 border-white text-center text-lg font-normal md:px-2 ${
                isClicked
                  ? "bg-white text-lg font-medium text-gray-950"
                  : "bg-transparent"
              }`}
            >
              Ver código do portifólio
            </Link>

            <Link
              // href={"https://github.com/IS4I4SCANDID0"}
              href={"ojsdns"}
              target="_blank"
              className={`flex h-[40px] w-full flex-row items-center justify-center gap-4 rounded-3xl border-2 border-white py-2 text-center text-lg font-normal md:px-2 lg:h-[45px] lg:max-w-[186px] ${
                iPAdStyle ? "max-w-[195px]" : ""
              } lg:px-5 ${
                isClicked
                  ? "bg-white text-lg font-medium text-gray-950"
                  : "bg-transparent"
              }`}
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
        </div>
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
