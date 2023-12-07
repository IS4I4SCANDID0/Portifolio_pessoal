import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = (): JSX.Element => {
  return (
    <footer
      id="rodape"
      className="flex h-96 w-screen flex-col items-center justify-center bg-gray-950 text-white"
    >
      <div className="mx-auto flex w-11/12 flex-col items-center gap-6 lg:max-w-[1250px] lg:flex-row lg:justify-between">
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">Obrigado por visitar!</h2>
          <p className="text-sm md:text-base font-normal text-zinc-400 lg:text-lg">
            Espero que tenha gostado da experiência!
          </p>
          <p className="text-sm md:text-base font-normal text-zinc-400 lg:text-lg">
            Me siga nas redes sociais. Vamos criar conexões e conversar.
          </p>
        </div>
        <div className="flex max-w-[280px] border-2 border-indigo-400 items-center justify-between gap-6 mt-7">
          <Link
            href={"https://instagram.com/isaiasmiranda_c"}
            target="_blank"
            role="link"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-zinc-900 p-3 rounded-md"
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
            href={"https://www.facebook.com/isaias.candido.18"}
            target="_blank"
            role="link"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-zinc-900 p-3 rounded-md"
          >
            <FaFacebookF
              size={35}
              className="fill-zinc-400"
              role="link"
              tabIndex={0}
              aria-label="Facebook de Isaias Candido"
            />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/isaias-c-dev-em-formação"}
            target="_blank"
            role="link"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-zinc-900 p-3 rounded-md"
          >
            <FaLinkedinIn
              size={35}
              className="fill-zinc-400"
              role="link"
              tabIndex={0}
              aria-label="Linkedin de Isaias Candido"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
