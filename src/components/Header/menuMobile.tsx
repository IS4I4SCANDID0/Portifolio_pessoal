import { useMediaScreen } from "@/hooks/screenMedia";
import { INavLinksProps } from "@/interface/icons.interface";
import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimation,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const MenuMobile = ({ isDrop, handleDrop }: INavLinksProps): JSX.Element => {
  // const iPadStyle = useMediaScreen(820);

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
    if (isDrop) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [isDrop, controls]);

  return (
    <AnimatePresence>
      {isDrop && (
        <motion.nav
          initial="closed"
          animate={controls}
          variants={myVariants}
          exit="closed"
          className={`absolute left-0 right-0 top-16 z-30 flex flex-col gap-4 bg-gray-950 pb-4`}
        >
          <div className="w-11/12 flex flex-col gap-4 self-center pl-1 pt-8">
            <motion.div variants={childVariants}>
              <Link
                className="text-2xl"
                href="#inicio"
                role="link"
                onClick={() => handleDrop()}
              >
                Início
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <Link
                className="text-2xl"
                href="#projetos"
                role="link"
                onClick={() => handleDrop()}
              >
                Projetos
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <Link
                className="text-2xl"
                href="#contatos"
                role="link"
                onClick={() => handleDrop()}
              >
                Contatos
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <Link
                className="text-2xl"
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
            className={`custom-gradient absolute left-0 right-0 top-56 z-20 h-[0.1rem] w-full`}
          ></motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
