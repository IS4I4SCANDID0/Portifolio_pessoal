import { INavLinksProps } from "@/interface/icons.interface";
import { AnimatePresence, AnimationControls, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export const MenuMobile = ({ isDrop }: INavLinksProps): JSX.Element => {
  const controls: AnimationControls = useAnimation()

  const myVariants = {
    open: {
      opacity: 1,
      y: 20,
      transition: { staggerChildren: 0.1, type:"spring", ease: "easeIn", duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: 0,
      transition: { staggerChildren: 0.1, type:"spring", ease: "easeInOut", duration: 0.3 },
    },
  };

  const childVariants = {
    open: { opacity: 1, y: 0, transition: { type:"spring", ease: "easeInOut", duration: 0.3 } },
    closed: {
      opacity: 0,
      y: -100,
      transition: { type: "spring" , ease: "easeInOut", duration: 1 },
    },
  };

  useEffect(() => {
    if(isDrop) {
      controls.start("open")
    
    } else {
      controls.start("closed")
    }
  }, [isDrop, controls])

  return (
    <AnimatePresence>
      {isDrop && (
        <motion.nav
          initial="closed"
          animate={controls}
          exit="closed"
          variants={myVariants}
          className="absolute left-0 right-0 top-16 z-20 flex flex-col items-start gap-4 bg-gray-950 pb-4 pl-4 md:pl-8" 
        >
          <motion.div variants={childVariants}>
            <Link className="text-2xl" href="#inicio" role="link">
              Início
            </Link>
          </motion.div>

          <motion.div variants={childVariants}>
            <Link className="text-2xl" href="#projetos" role="link">
              Projetos
            </Link>
          </motion.div>

          <motion.div variants={childVariants}>
            <Link className="text-2xl" href="#contatos" role="link">
              Contatos
            </Link>
          </motion.div>

          <motion.div variants={childVariants}>
            <Link className="text-2xl" href="#midiasSciais" role="link">
              Mídias Sociais
            </Link>
          </motion.div>

          <motion.div
            initial="closed"
            animate={controls}
            exit="closed"
            variants={childVariants}
            transition={{ delay: 1 }}
            className={`custom-gradient absolute left-0 right-0 top-48 z-20 h-[0.1rem] w-full`}
          ></motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
