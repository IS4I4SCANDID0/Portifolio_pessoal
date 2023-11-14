"use client";
import { useCallback, useState } from "react";
import { Poppins, Raleway } from "next/font/google";
import { LiaBarsSolid } from "react-icons/lia";
import { VscClose } from "react-icons/vsc";
import { MenuMobile } from "./menuMobile";
import Link from "next/link";
import { motion } from "framer-motion";


export const Header = (): JSX.Element => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const handleDrop = (): void => {
    setIsDrop(!isDrop);
  };

  const menuVariants = {
    open: { opacity: 1,  },
    closed: { opacity: 0, y: 0 },  
  }

  return (
    <>
      <header
        className="fixed z-10 flex h-24 w-screen flex-col items-center justify-center gap-4 bg-gray-950 text-white  md:p-0"
      >
        <div className="w-11/12 lg:w-9/12 flex items-center justify-between gap-5 lg:px-0 bg-orange-500">
          <h2 className="text-xl md:text-2xl font-semibold">
            Isaias Candido
          </h2>
          <nav className="hidden w-2/4 items-center justify-between  bg-red-600 font-normal lg:flex lg:flex-row">
            <Link
              className="text-xl"
              href="#inicio"
              role="button"
              onClick={() => setIsDrop(isDrop)}
            >
              Início
            </Link>

            <Link
              className="text-xl"
              href="#projetos"
              role="button"
              onClick={() => setIsDrop(false)}
            >
              Projetos
            </Link>

            <Link
              className="text-xl"
              href="#contatos"
              role="button"
              onClick={() => setIsDrop(!isDrop)}
            >
              Contatos
            </Link>

            <Link
              className="text-xl"
              href="#midiasSciais"
              role="button"
              onClick={() => setIsDrop(isDrop)}
            >
              Mídias Sociais
            </Link>
          </nav>
          <motion.button 
            type= "button" 
            className= "lg:hidden"
            initial= "open"
            animate= {isDrop ? "open" : "closed"}

          >
            {!isDrop ? (
              <LiaBarsSolid
              siize={30}
              className="h-8 w-8"
              onClick={() => handleDrop()}
              />
            ) : (
                <VscClose
                size={30}
                className="h-8 w-8"
                onClick={() => handleDrop()}
                />
            )}
          </motion.button>
        </div>
        <MenuMobile isDrop={isDrop} />
        {!isDrop && 
          <div className={`custom-gradient w-full h-[0.1rem] fixed z-10 top-24 right-0 left-0`}></div>
        }
      </header>
    </>
  );
};
//! TERMINAR DE ANIMAR O BOTÃO E ALINHAR O QUE FALTA