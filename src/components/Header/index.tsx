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

  const handleDrop = useCallback((): void => {
    setIsDrop(!isDrop);
  }, [isDrop]);

  return (
    <>
      <header className="fixed z-20 flex h-24 w-screen flex-col items-center justify-center gap-4 bg-gray-950 text-white md:p-0">
        <div className="flex w-11/12 items-center justify-between gap-5 px-1 lg:max-w-[1250px] lg:px-0">
          <h2 className="text-xl font-semibold md:text-2xl">Isaias Candido</h2>
          <nav className="hidden w-2/4 items-center justify-between font-normal lg:flex lg:flex-row lg:w-2/5">
            <Link className="text-xl" href="#inicio" role="button">
              Início
            </Link>

            <Link className="text-xl" href="#projetos" role="button">
              Projetos
            </Link>

            <Link className="text-xl" href="#contatos" role="button">
              Contatos
            </Link>

            <Link className="text-xl" href="#rodape" role="button">
              Mídias Sociais
            </Link>
          </nav>
          <motion.button
            type="button"
            className="lg:hidden"
            initial="open"
            animate={isDrop ? "open" : "closed"}
            aria-label={isDrop ? "Abrir menu" : "Fechar menu"}
          >
            {!isDrop ? (
              <LiaBarsSolid
                size={30}
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
        <MenuMobile isDrop={isDrop} handleDrop={handleDrop} />
        {!isDrop && (
          <div
            className={`custom-gradient fixed left-0 right-0 top-24 z-10 h-[0.1rem] w-full`}
          ></div>
        )}
      </header>
    </>
  );
};
//! TERMINAR DE ANIMAR O BOTÃO E ALINHAR O QUE FALTA
