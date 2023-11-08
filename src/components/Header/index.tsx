"use client";

import { useCallback, useState } from "react";
import { Poppins, Raleway } from "next/font/google";
import { LiaBarsSolid } from "react-icons/lia";
import { VscClose } from "react-icons/vsc";
import { MenuMobile } from "./menuMobile";
import Link from "next/link";

const poppins = Raleway({
  subsets: ["latin"],
  weight: ["300"],
});

export const Header = (): JSX.Element => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const handleDrop = (): void => {
    setIsDrop(!isDrop);
  };

  return (
    <>
      <header
        className="fixed z-10 flex  h-36 w-screen flex-col items-center justify-center gap-4 bg-gray-950 text-white  md:p-0  lg:p-12"
      >
        <div className="flex w-11/12 items-center justify-between  gap-5 bg-orange-500 px-0 md:w-2/3 md:px-4">
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
          <div className="lg:hidden">
            {!isDrop ? (
              <LiaBarsSolid
              siize={30}
              role="button"
              className="h-8 w-8"
              onClick={() => handleDrop()}
              />
              ) : (
                <VscClose
                size={30}
                role="button"
                className="h-8 w-8"
                onClick={() => handleDrop()}
                />
                )}
          </div>
        </div>
        <MenuMobile isDrop={isDrop} />
      <div className={`custom-border w-full h-[0.1rem] fixed z-10 top-36 right-0 left-0`}></div>
      </header>
    </>
  );
};
