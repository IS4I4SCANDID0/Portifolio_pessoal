"use client";
import {
  useInView,
  useAnimation,
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WhatsAppContainer } from "../ContactsContainer/WhatsApp";
import { EmailContainer } from "../ContactsContainer/Email";
import { LinkedInContainer } from "../ContactsContainer/LinkedIn";

export const Contacts = (): JSX.Element => {
  const ref = useRef<HTMLElement | null >(null);
  const { scrollYProgress } = useScroll();
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0.1 , 0.9])

  // !DEBUGAR  A ANIMAÇÃO DE SCALE
  return (
    <>
      <div className={`custom-gradient h-[0.15rem] w-full`}></div>
      <section
        id="contatos"
        className="flex static z-10 h-[56.25rem] w-screen flex-col items-center justify-between border-2 border-sky-400 bg-gray-i-900 lg:flex-row lg:pt-40"
      >
        <div className="mx-auto my-auto flex w-11/12 flex-col self-center border-2 border-red-600 lg:h-full lg:w-[65%] lg:flex-row lg:items-center lg:justify-between"
          // ref={ref}
        >
          <motion.div
            className={`h-48 max-w-fit border-2 lg:h-[700px] lg:w-[400px] lg:self-center lg:border-2 lg:border-yellow-400`}
            style={{ scale }}
          >
            <aside className="max-w-[25rem] max-h-max lg:gap-[1rem] border-2 border-violet-400 lg:sticky lg:top-32 lg:z-30"
              ref={ref}
              // style={{ scale }}
            >
              <h2
                className={`max-w-fit border-2 border-emerald-400 text-2xl font-semibold `}
                // style={{ scale }}
              >
                Vamos
                <span
                  className={`custom-text custom-gradient text-2xl font-bold`}
                >
                  transformar suas
                </span>
                <span
                  className={`custom-text custom-gradient text-2xl font-bold`}
                >
                  ideias em realidade
                </span>
                , entre em contato!
              </h2>
            </aside>
          </motion.div>
          <div className="flex flex-col gap-5 lg:self-center xl:w-1/2 lg:h-[700px]">
            <WhatsAppContainer />
            <EmailContainer />
            <LinkedInContainer />
          </div>
        </div>
      </section>
    </>
  );
}