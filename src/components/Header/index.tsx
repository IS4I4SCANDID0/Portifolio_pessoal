"use client";
import { useCallback, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { VscClose } from "react-icons/vsc";
import { MenuMobile } from "./menuMobile";
import Link from "next/link";
import { motion } from "framer-motion";

// ! ADICIONAR UMA ANIMAÇÃO NO BOTÃO DO MENU MOBILE E NO FECHAMENTO PARA ACOMPANAHAR A MESMA ANIMAÇÃO DA ABERTURA  
export const Header = (): JSX.Element => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const handleDrop = useCallback((): void => {
    console.log('antes setIsDrop', isDrop)
    setIsDrop(prevIsDrop => !prevIsDrop);
    console.log('depois setIsDrop', !isDrop)
  }, [isDrop]);

  // !resolver o bug da abertura do  mobile
  return (
    <>
      <header className="fixed z-20 h-24 py-10 w-screen justify-center gap-4 bg-gray-950 lg:pl-5 text-white border-2 border-yellow-300">
        <div className="flex w-[95%] items-center justify-between gap-5 px-2 lg:w-[85rem] lg:max-w-full mx-auto border-2 border-blue-500">
          <h2 className="text-xl font-semibold md:text-2xl">Isaias Candido</h2>
          <div className="hidden lg:w-2/4 items-center justify-between font-normal lg:flex lg:max-w-[500px] border-2 border-red-600">
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
          <div className={`custom-gradient fixed left-0 right-0 top-24 z-10 h-[0.1rem] w-full`}></div>
        )}
      </header>
    </>
  );
}