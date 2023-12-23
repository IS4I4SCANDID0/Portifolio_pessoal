"use client"
import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { Raleway, Roboto_Flex, ZCOOL_KuaiLe } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font";

const robotoFlex: NextFont = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400"]
})

export const LinkedInContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="mt-4 flex max-w-full lg:p-3 items-center lg:mt-0">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-tr from-blue-600 from-20% to-blue-800 to-80% p-4">
        <FaLinkedinIn className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu LinkedIn</h3>
        <p className={`${robotoFlex.className} text-xs leading-6 tracking-[0.025rem] lg:text-base lg:leading-7 font-normal text-zinc-400`}>
          Podemos criar interações frequentes e uma rede de compartilhamento.
        </p>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/isaias-c-dev-em-formação"}
          className={`max-w-max text-xs lg:text-base font-normal ${robotoFlex.className} trackin-[0.25rem] text-zinc-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Visite o LinkeIn
        </Link>
      </div>
    </div>
  );
};