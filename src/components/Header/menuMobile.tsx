"use client"
import { INavLinksProps } from "@/interface/icons.interface";
import { AnimatePresence, AnimationControls, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export const MenuMobile = ({ isDrop, handleDrop }: INavLinksProps): JSX.Element => {
  const controls: AnimationControls = useAnimation();

  const myVariants = {
    open: {
      opacity: 1,
      y: 20,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        ease: "easeIn",
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", ease: "easeInOut", duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -100,
      transition: { type: "spring", ease: "easeInOut", duration: 0.4 },
    },
  };

  useEffect(() => {
        console.log('Efeito MenuMobile - isDrop:', isDrop);

    if (isDrop) {
      console.log(controls.start("open"));
      console.log('aberto', isDrop);
    } else {
      console.log(controls.start("closed").then(() => controls.set("closed")));
      console.log('fechado', isDrop);
    }
  }, [isDrop, controls]);
  
  return (
    <AnimatePresence>
        <motion.nav
          initial="closed"
          animate={controls}
          variants={myVariants}
          exit="closed"
          className={`${isDrop ? "flex" : "hidden"} absolute left-0 right-0 top-16 z-30 flex flex-col justify-center items-center gap-4 bg-gray-950 pb-6 mx-auto lg:hidden`}
        >
          <div className="w-11/12 flex flex-col gap-4 self-center pl-1 pt-8 lg:pl-0">
            <motion.div variants={childVariants}>
              <Link
                className="text-xl"
                href="#inicio"
                role="link"
                onClick={() => handleDrop()}
              >
                Início
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <Link
                className="text-xl"
                href="#projetos"
                role="link"
                onClick={() => handleDrop()}
              >
                Projetos
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <Link
                className="text-xl"
                href="#contatos"
                role="link"
                onClick={() => handleDrop()}
              >
                Contatos
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <Link
                className="text-xl"
                href="#rodape"
                role="link"
                onClick={() => handleDrop()}
              >
                Mídias Sociais
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial="closed"
            animate={controls}
            variants={childVariants}
            transition={{ delay: 1 }}
            exit="closed"
            className={`custom-gradient absolute left-0 right-0 top-[13.5rem] z-20 h-[0.1rem] w-full`}
          ></motion.div>
        </motion.nav>
    </AnimatePresence>
  );
};