"use client";
import { useCallback } from "react";
import { MenuMobile } from "./menuMobile";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";

export const Header = (): JSX.Element => {
  const [isToggleMenu, setIsToggleMenu] = useCycle<boolean>(false, true);


  const handleDrop = useCallback((): void => {
    setIsToggleMenu()
  }, [isToggleMenu]);

  return (
    <>
      <header className="fixed z-20 h-24 py-10 w-screen justify-center gap-4 bg-gray-950 lg:px-6 xl:pl-9 text-white">
        <div className="flex w-[95%] items-center justify-between gap-5 px-[0.45rem] lg:w-[85rem] lg:max-w-full mx-auto">
          <h2 className="text-xl font-semibold md:text-2xl xl:ml-1">Isaias Candido</h2>
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
            animate={isToggleMenu ? "open" : "closed"}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            aria-label={isToggleMenu ? "Fechar menu" : "Abrir menu"}
            onClick={() => handleDrop()}
          >
            <motion.svg width={28} height={28} viewBox="0 0 23 23">
              <g transform="translate(0, 2)">
                <motion.path
                  fill="#FFFFFF"
                  strokeWidth="1.35"
                  stroke="#FFFFFF"
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                  }}
                />
                <motion.path
                  d="M 2 9.423 L 20 9.423"
                  fill="#FFFFFF"
                  strokeWidth="1.35"
                  stroke="#FFFFFF"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.1 }}
                />
                <motion.path
                  fill="#FFFFFF"
                  strokeWidth="1.35"
                  stroke="#FFFFFF"
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                  }}
                />
              </g>
            </motion.svg>
          </motion.button>
        </div>
        <MenuMobile isToggleMenu={isToggleMenu} handleDrop={handleDrop} />
        {!isToggleMenu && (
          <div className={`custom-gradient fixed left-0 right-0 top-24 z-10 h-[0.1rem] w-full`}></div>
        )}
      </header>
    </>
  );
}



      {/* {!isDrop ? (
              <LiaBarsSolid
                size={30}
                key="open"
                className="h-8 w-8"
              />
            ) : (
              <VscClose
                size={30}
                key="closed"
                className="h-8 w-8"
              />
            )} */}