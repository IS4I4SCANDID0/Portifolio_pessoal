import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { Raleway } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font";

const raleway: NextFont = Raleway({
  subsets: ["latin"],
  weight: ["500"]
})

export const LinkedInContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="mt-4 flex max-w-full lg:p-3 items-center border border-red-500">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-blue-600 from-20% to-blue-800 to-80% p-4">
        <FaLinkedinIn className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu LinkedIn</h3>
        <p className={`${raleway.className} text-sm leading-6 tracking-[0.025rem] lg:text-lg lg:leading-7 font-normal text-zinc-400`}>
          Podemos criar interações frequentes e uma rede de compartilhamento.
        </p>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/isaias-c-dev-em-formação"}
          className={`max-w-max text-sm lg:text-lg font-normal trackin-[0.25rem] text-zinc-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Visite o LinkeIn
        </Link>
      </div>
    </div>
  );
};
