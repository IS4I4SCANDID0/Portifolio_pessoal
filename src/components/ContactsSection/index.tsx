"use client"
import { useInView, useAnimation, motion, useScroll, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { WhatsAppContainer } from "../ContactsContainer/WhatsApp";
import { SiWhatsapp } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
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
      <div className={`custom-gradient h-[0.15rem] w-full`}></div>
      <section className="flex min-h-screen w-screen flex-col items-center border border-red-500 bg-gray-950">
        <div className="flex h-5/6 w-11/12 flex-col border border-lime-400 lg:w-9/12 lg:flex-row mt-3">
        <motion.div
            ref={ref}
            className={`h-48 w-full p-5 border border-orange-600 lg:h-full lg:w-1/2 ${scale}`}
      
          >
            <motion.h2
              className={`text-2xl lg:text-3xl font-semibold ${scale}`}
              // style={{ scale }}
            >
              Vamos 
              <motion.span
                className={`custom-text custom-gradient text-2xl lg:text-3xl font-semibold ${scale}`}
                // style={{ scale }}
              >
                transformar suas
              </motion.span> 
              <motion.span
                className={`custom-text custom-gradient text-2xl lg:text-3xl font-semibold ${scale}`}
              >
                em realidade
              </motion.span>, 
              entre em contato!
            </motion.h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            <WhatsAppContainer />
            <EmailContainer />
            <LinkedInContainer />
          </div>
        </div>
      </section>
    </>
  );
};
