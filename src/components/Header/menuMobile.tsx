"use client"
import { INavLinksProps } from "@/interface/icons.interface";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const MenuMobile = ({ isToggleMenu, handleDrop }: INavLinksProps): JSX.Element => {
  const DropDownVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 0.5,
      },
    }
  };

  const childVariants = {
    initial: {
      scaleY: 0,
      opacity: 0,
      y: -100,
      transition: { type: "spring", ease: "easeInOut", duration: 0.3 },
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", ease: "easeInOut", duration: 0.3 },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      y: -100,
      transition: { type: "spring", ease: "easeInOut", duration: 0.3 },
    },
  };
  
  return (
    <AnimatePresence>
      
      {isToggleMenu && (
        <motion.nav
          initial="initial"
          animate="animate"
          variants={DropDownVariants}
          exit="exit"
          className={`${isToggleMenu ? "flex" : "hidden"} absolute left-0 right-0 top-20 z-30 flex flex-col origin-top justify-center items-center gap-4 bg-gray-950 pb-6 mx-auto lg:hidden`}
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
            initial="initial"
            animate="animate"
            variants={childVariants}
            transition={{ delay: 1.5 }}
            exit={{ ...childVariants.exit,
              transition : {
                ...childVariants.exit.transition,
                delay: 0.2
              }
            }}
            className={`custom-gradient absolute left-0 right-0 top-[13.5rem] z-20 h-[0.1rem] w-full`}
          ></motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};