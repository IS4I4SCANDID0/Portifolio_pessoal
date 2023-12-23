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
import { Raleway } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { IFontProps } from "@/interface/project.interface";

export const Contacts = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0.1, 0.9],
  );

  return (
    <>
      <div className={`custom-gradient h-[0.15rem] w-full`}></div>
      <section
        id="contatos"
        className="flex max-w-full flex-col items-center justify-center py-56 border-2 border-sky-400 bg-gray-i-900 lg:flex-row"
      >
        <div className="w-[95%] flex flex-col lg:px-4 justify-center self-center mx-auto border-2 border-purple-500 lg:flex-row lg:max-w-[1300px]"
          ref={ref}
        >
          <motion.div
            className={`border-2 w-[300px] border-yellow-400 lg:max-w-[40%]`}
            style={{ scale }}
          >
            <aside className="border-4 border-violet-600 xl:sticky xl:top-32 xl:bottom-0 gap-[1rem] lg:grid">
              <h2
                className={`border-4 border-emerald-500 text-[1.75rem] font-semibold`}
              >
                Vamos 
                <span className={`custom-text custom-gradient text-[1.75rem] font-extrabold`}> transformar suas </span>
                <span className={`custom-text custom-gradient text-[1.75rem] font-extrabold`}> ideias em realidade</span>
                , entre em contato!
              </h2>
            </aside>
          </motion.div>
          <div className="flex max-w-full flex-col gap-5 lg:h-full lg:max-w-[45%] lg:self-center border-2 border-lime-500">
            <WhatsAppContainer />
            <EmailContainer />
            <LinkedInContainer />
          </div>
        </div>
      </section>
    </>
  );
};
// ! --> Ajustar as larguras da seçãod e contatos <---