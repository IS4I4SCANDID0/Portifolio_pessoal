import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { IoMailOpenOutline } from "react-icons/io5";
import { Roboto_Flex } from "next/font/google"

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400"]
})

export const EmailContainer = ({ Icon }: IconProps): JSX.Element => {
  // ! MUDAR O TAMNHO DA FONTE NOS TABLETS COM O HOOK PERSONALIZADO OU CLASSE DO TAILWINDCSS

  return (
    <div className="max-w-full lg:p-3 mt-4 flex items-center lg:mt-0">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-neutral-900 from-20% to-black to-80% p-4">
        <IoMailOpenOutline className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu Email</h3>
        <p className={`${robotoFlex.className} text-xs lg:text-base leading-7 tracking-[0.025rem] ${robotoFlex.className} tracking-[0.025rem] font-normal text-zinc-400`}>
          Adoraria receber suas ideias, sugestões e feedbacks por e-mail. Sua
          contribuição é valiosa!
        </p>
        <Link
          target="_blank"
          href={"mailto:isaiascandido92@outlook.com"}
          onClick={() =>
            (window.location.href = "mailto:isaiascandido92@outlook.com")
          }
          className={`max-w-max text-xs lg:text-base font-normal trackin-[0.025rem] text-zinc-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Envie-me um e-mail
        </Link>
      </div>
    </div>
  );
};
