"use client"
import { useInView, useAnimation, motion, useScroll, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WhatsAppContainer } from "../ContactsContainer/WhatsApp";
import { EmailContainer } from "../ContactsContainer/Email";
import { LinkedInContainer } from "../ContactsContainer/LinkedIn";

export const Contacts = (): JSX.Element => {
  const ref = useRef(null)
  const { scrollY } = useScroll({ container: ref });
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<number>(0)

  useMotionValueEvent(scrollY, 'change', v => {
    setScrollDirection(v > lastScrollY ? 1 : -1);
    setLastScrollY(v);
  });

  const scale = useTransform(scrollY, value => {
    return scrollDirection === 3 ? Math.max(3, value / 1000) : Math.min(3, value / 1000)

  })

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
      <div className={`custom-gradient h-[0.15rem] w-full static z-10`}></div>
      <section id="contatos" className="flex min-h-screen w-screen flex-col items-center justify-between static z-10 border border-red-500 bg-gray-i-900">
        <div className="flex h-5/6 w-11/12 lg:w-[72%] flex-col border border-lime-400 lg:flex-row lg:justify-between mt-6">
        <motion.div
            ref={ref}
            className={`h-48 w-full lg:w-[400px] p-5 lg:px-5 lg:py-3 border border-orange-600 lg:h-full lg:mt-4`}
      
          >
            <motion.h2
              className={`text-2xl font-semibold`}

            >
              Vamos
              {" "} 
              <motion.span
                className={`custom-text custom-gradient text-2xl font-semibold`}
  
              >
                transformar suas
              </motion.span> 
              {" "}
              <motion.span
                className={`custom-text custom-gradient text-2xl font-semibold`}
  
              >
                em realidade
              </motion.span>, 
              {" "}
              entre em contato!
            </motion.h2>
          </motion.div>
          <div className="xl:w-1/2 flex flex-col gap-3">
            <WhatsAppContainer />
            <EmailContainer />
            <LinkedInContainer />
          </div>
        </div>
      </section>
    </>
  );
};
