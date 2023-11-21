import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";

export const Footer = (): JSX.Element => {
  return (
    <footer
      id="rodape"
      className="h-96 min-w-full flex flex-col items-center justify-center bg-gray-950 text-white"
    >
      <div className="mx-auto flex flex-col w-11/12 lg:flex-row items-center gap-6 border-2 border-violet-600 lg:w-9/12 lg:justify-between">
        <div className="text-center flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Obrigado por visitar!</h2>
          <p className="text-sm font-normal text-zinc-400 lg:text-lg">
            Espero que tenha gostado da experiência!
          </p>
          <p className="text-sm font-normal text-zinc-400 lg:text-lg">
            Me siga nas redes sociais. Vamos criar conexões
          </p>
        </div>
        <div className="flex w-[280px] max-w-[300px] items-center justify-around border-2 border-red-600 px-2 py-4">
          <Link
            href={"https://instagram.com/isaiasmiranda_c"}
            target="_blank"
            role="link"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-transparent"
          >
            <SiInstagram
              size={35}
              className="fill-zinc-400"
              role="link"
              tabIndex={0}
              aria-label="Instagram de Isaias Candido"
            />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/isaias-c-dev-em-formação"}
            target="_blank"
            role="link"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-transparent"
          >
            <SlSocialLinkedin
              size={35}
              className="fill-zinc-400"
              role="link"
              tabIndex={0}
              aria-label="Linkedin de Isaias Candido"
            />
          </Link>

          {/* <Link >
          </Link> */}
        </div>
      </div>
    </footer>
  );
};
// ! TERMINAR ESSE COMPONENTE
