"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { WhatsAppContainer } from "../ContactsContainer/WhatsApp";
import { EmailContainer } from "../ContactsContainer/Email";
import { LinkedInContainer } from "../ContactsContainer/LinkedIn";
// import { Raleway } from "next/font/google";
// import { NextFont } from "next/dist/compiled/@next/font";
// import { IFontProps } from "@/interface/project.interface";

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
        className="flex max-w-full flex-col items-center justify-center py-36 lg:py-56 border-2 border-sky-400 bg-gray-i-900 lg:flex-row"
      >
        <div className="w-[95%] flex flex-col lg:px-4 justify-center self-center mx-auto border-2 border-purple-500 lg:flex-row lg:max-w-[1300px] lg:gap-32"
          ref={ref}
        >
          <motion.div
            className={`border-2 border-yellow-400 mb-8 lg:max-w-[40%] lg:mb-0`}
            style={{ scale }}
          >
              <aside className="border-4 h-56 border-violet-600 lg:h-auto lg:min-w-full xl:sticky xl:top-32 xl:bottom-0 gap-[1rem] lg:max-w-[40%] lg:grid">
                <h2
                  className={`text-[1.75rem] font-semibold`}
                >
                  Vamos 
                  <span className={`custom-text custom-gradient text-[1.75rem] font-extrabold`}> transformar suas </span>
                  <span className={`custom-text custom-gradient text-[1.75rem] font-extrabold`}> ideias em realidade</span>
                  , entre em contato!
                </h2>
            </aside>
          </motion.div>
          <div className="flex max-w-full flex-col gap-24 lg:h-full lg:max-w-[45%] lg:self-center border-2 border-lime-500">
            <WhatsAppContainer />
            <EmailContainer />
            <LinkedInContainer />
          </div>
        </div>
      </section>
    </>
  );
};