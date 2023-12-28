"use client";
import { useCallback, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { VscClose } from "react-icons/vsc";
import { MenuMobile } from "./menuMobile";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// ! ADICIONAR UMA ANIMAÇÃO NO BOTÃO DO MENU MOBILE  
export const Header = (): JSX.Element => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const handleDrop = useCallback((): void => {
    setIsDrop(prevIsDrop => !prevIsDrop);
  }, [isDrop]);

  return (
    <>
      <header className="fixed z-20 h-24 py-10 w-screen justify-center gap-4 bg-gray-950 lg:pl-5 text-white">
        <div className="flex w-[95%] items-center justify-between gap-5 px-[0.45rem] lg:w-[85rem] lg:max-w-full mx-auto">
          <h2 className="text-xl font-semibold md:text-2xl">Isaias Candido</h2>
          <div className="hidden lg:w-2/4 items-center justify-between font-normal lg:flex lg:max-w-[500px]">
            <Link className="text-base md:text-xl font-medium" href="#inicio" role="button">
              Início
            </Link>

            <Link className="text-base md:text-xl font-medium" href="#projetos" role="button">
              Projetos
            </Link>

            <Link className="text-base md:text-xl font-medium" href="#contatos" role="button">
              Contatos
            </Link>

            <Link className="text-base md:text-xl font-medium" href="#rodape" role="button">
              Mídias Sociais
            </Link>
          </div>
          <motion.button
            type="button"
            className="lg:hidden"
            initial="closed"
            animate={isDrop ? "open" : "closed"}
            aria-label={isDrop ? "Abrir menu" : "Fechar menu"}
          >
              {!isDrop ? (
                <LiaBarsSolid
                  size={30}
                  key="open"
                  className="h-8 w-8"
                  onClick={() => handleDrop()}
                />
              ) : (
                <VscClose
                  size={30}
                  key="closed"
                  className="h-8 w-8"
                  onClick={() => handleDrop()}
                />
              )}
          </motion.button>
        </div>
        <MenuMobile isDrop={isDrop} handleDrop={handleDrop} />
        {!isDrop && (
          <div className={`custom-gradient fixed left-0 right-0 top-24 z-10 h-[0.1rem] w-full`}></div>
        )}
      </header>
    </>
  );
}