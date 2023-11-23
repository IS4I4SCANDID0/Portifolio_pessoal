"use client";
import {
  useInView,
  useAnimation,
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WhatsAppContainer } from "../ContactsContainer/WhatsApp";
import { EmailContainer } from "../ContactsContainer/Email";
import { LinkedInContainer } from "../ContactsContainer/LinkedIn";

export const Contacts = (): JSX.Element => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ container: ref });
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrollDirection(v > lastScrollY ? 1 : -1);
    setLastScrollY(v);
  });

  const scale = useTransform(scrollY, (value) => {
    return scrollDirection === 3
      ? Math.max(3, value / 1000)
      : Math.min(3, value / 1000);
  });

  // const isInView = useInView(ref)

  // useEffect(() => {
  //   if(isInView) {

  //     controls.start({
  //       scale: 1.1,
  //       transition: { duration: 0.3 }
  //     });

  //   } else {
  //     controls.start({
  //       scale: 1,
  //       transition: { duration: 0.3 }
  //     });
  //   }
  // }, [controls, isInView])

  return (
    <>
      <div className={`custom-gradient h-[0.15rem] w-full`}></div>
      <section id="contatos" className="flex h-[900px] w-screen flex-col items-center justify-between bg-gray-i-900">
        <div className="flex w-11/12 flex-col self-center lg:w-[65%] lg:flex-row lg:justify-between my-auto">
          <motion.div
            ref={ref}
            className={`h-48 w-full p-5 lg:mt-4 lg:h-full lg:w-[400px] lg:px-5 lg:py-3`}
          >
            <motion.h2 className={`text-2xl font-semibold`}>
              Vamos{" "}
              <motion.span
                className={`custom-text custom-gradient text-2xl font-semibold`}
              >
                transformar suas
              </motion.span>{" "}
              <motion.span
                className={`custom-text custom-gradient text-2xl font-semibold`}
              >
               ideias em realidade
              </motion.span>
              , entre em contato!
            </motion.h2>
          </motion.div>
          <div className="flex flex-col gap-3 xl:w-1/2">
            <WhatsAppContainer />
            <EmailContainer />
            <LinkedInContainer />
          </div>
        </div>
      </section>
    </>
  );
};
