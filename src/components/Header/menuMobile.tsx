import { INavLinksProps } from "@/interface/icons.interface";
import Link from "next/link";

export const MenuMobile = ({ isDrop }: INavLinksProps): JSX.Element => {
  return (
    <>
      <nav
        className={`absolute z-20 left-0 right-0 top-28 flex flex-col items-start gap-4 bg-gray-950 pb-4 pl-4 ${
          isDrop ? "flex" : "hidden"} lg:hidden`
        }>
        <Link className="text-xl" href="#inicio" role="link">
          Início
        </Link>

        <Link className="text-xl" href="#projetos" role="link">
          Projetos
        </Link>

        <Link className="text-xl" href="#contatos" role="link">
          Contatos
        </Link>

        <Link className="text-xl" href="#midiasSciais" role="link">
          Mídias Sociais
        </Link>
      <div className={`custom-border w-full h-[0.1rem] absolute z-20 top-44 right-0 left-0`}></div>
      </nav>
    </>
  );
};
