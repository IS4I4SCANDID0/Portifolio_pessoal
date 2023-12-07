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
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);
  //!RECONSTRUIR SE FOR RPECISO
  return (
    <>
      <div className={`custom-gradient h-[0.15rem] w-full`}></div>
      <section
        id="contatos"
        className="flex h-[56.25rem] w-screen flex-col items-center justify-between border-2 pt-40 border-sky-400 bg-gray-i-900 lg:flex-row lg:pt-40"
      >
        <div className="h-[80%] max-w-11/12 lg:min-h-max lg:w-[65%] px-4 mx-auto border-2 border-purple-500 lg:flex lg:justify-between">
          {/* <div */}
            {/* className="flex w-full flex-col mx-auto border-2 border-red-600 lg:h-full  lg:flex-row lg:items-start lg:justify-between lg:px-0" */}
          {/* > */}
            <motion.div
              className={`border-2 lg:min-h-full lg:border-2 lg:border-yellow-400 flex items-start gap-5 lg:w-[45%]`}
              // style={{ scale }}
            >
              <aside className="border-4 border-violet-600 self-start lg:grid  lg:sticky lg:top-32 lg:gap-[1rem]">
                <h2
                  className={`lg:block border-4 border-emerald-500 text-2xl lg:text-3xl font-semibold`}
                >
                  Vamos

                  <span className={` text-2xl lg:text-3xl font-bold`}>
                    transformar suas
                  </span>

                  <span className={` text-2xl lg:text-3xl font-bold`}>
                    ideias em realidade
                  </span>
                  , entre em contato!
                </h2>
              </aside>
            </motion.div>
            <div className="flex flex-col gap-5 lg:h-full lg:max-w-[45%] lg:self-center xl:max-w-[50%] border-2 border-lime-500">
              <WhatsAppContainer />
              <EmailContainer />
              <LinkedInContainer />
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};