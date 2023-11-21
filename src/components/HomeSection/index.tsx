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
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const HomeSection = (): JSX.Element => {
  const title1: string = "Paixão ";
  const title2: string = "por transformar ideias em realidade usando ";
  const title3: string = "tecnologia";
  // ! TENTAR FAZER A ESCRITA DE BAIXO PARA CIMA NO EIXO Y
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const animateVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);

  const splitText = (text: string, className: string = "") =>
    text.split("").map((char, index) => (
      <LazyMotion features={domAnimation}>
        <m.span
          key={index}
          className={className}
          variants={animateVariants}
          transition={{
            delay: index * 0.1,
            ease: "easeInOut",
            staggerChildren: 0.1,
          }}
          ref={ref}
          // initial="hidden"
          aria-hidden
        >
          {char}
        </m.span>
      </LazyMotion>
    ));
  // console.log('oi control', controls)
  // console.log('oi control', controls)
  // console.log('oi split', splitText)
  return (
    <section
      id="inicio"
      className={`lg:img-projects-bg z-0 flex w-screen flex-col border border-b-[0.15rem] border-purple-500 pb-4 lg:mt-0 lg:bg-fixed lg:bg-right lg:bg-no-repeat lg:pt-36`}
    >
      <section className="flex flex-col items-center justify-center border-4 border-blue-600 lg:ml-52 lg:w-1/2">
        <div className="w-11/12 gap-2 self-center border border-yellow-300 lg:w-full">
          <div className="mb-8 flex w-full items-center gap-2 self-start border border-lime-400 md:w-2/3">
            <Image
              className="transition-brightness h-14 w-14  rounded-full duration-200 ease-in-out hover:brightness-75"
              src="https://github.com/IS4I4SCANDID0.png"
              alt="Isaias Candido"
              width={75}
              height={75}
            />
            <h3 className="text-sm font-medium md:text-base ">
              Olá, bem-vindo ao meu universo de codificação
            </h3>
          </div>

          <h1
            className="text-3xl font-bold leading-normal tracking-normal md:text-6xl"

            // animate={isInView ? "visible" : "hidden"}
            // transition={{ staggerChildren: 0.07 }}
            // aria-hidden
          >
            <LazyMotion features={domAnimation}>
              <m.span
                // className={className}
                variants={animateVariants}
                transition={{
                  // delay: index * 0.1,
                  ease: "easeInOut",
                  staggerChildren: 0.1,
                }}
                ref={ref}
                // initial="hidden"
                aria-hidden
              >
                Paixão por transformar ideias em realidade usando tecnologia
              </m.span>
            </LazyMotion>
            {/* <span>
                {splitText(title1)}
              </span>
              <span>{splitText(title2)}</span>
              {/* <span className={`custom-text custom-gradient`}> */}
            {/* <span>
                {splitText(title3)}
              </span> */}
          </h1>
        </div>
        <div className="flex w-11/12 flex-col items-center justify-center gap-5  border-2 border-teal-400 py-12 md:flex-row lg:w-full">
          <Link
            href="#projetos"
            className={`custom-gradient w-full rounded-3xl py-2 text-center text-lg font-medium text-gray-950`}
          >
            Ver projetos
          </Link>

          <Link
            href={"https://github.com/IS4I4SCANDID0/portifolio_pessoal_v2"}
            target="_blank"
            className="w-full rounded-3xl border-2 border-white py-2 text-center text-lg font-normal"
          >
            Ver código do portifólio
          </Link>

          <Link
            href={"https://github.com/IS4I4SCANDID0"}
            target="_blank"
            className="flex w-full flex-row items-center justify-center gap-4 rounded-3xl border-2 border-white py-2 text-center text-lg font-normal  lg:max-w-fit lg:px-5"
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
