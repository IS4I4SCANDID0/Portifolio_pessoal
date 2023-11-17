import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

export const LinkedInContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="mt-4 flex max-w-full lg:p-3 items-center border border-red-500">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-blue-600 from-20% to-blue-800 to-80% p-4">
        <FaLinkedinIn className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu LinkedIn</h3>
        <p className="text-lg font-normal text-gray-400">
          Podemos criar interações frequentes e uma rede de compartilhamento.
        </p>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/isaias-c-dev-em-formação"}
          className={`max-w-max text-lg font-normal text-gray-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Visite o LinkeIn
        </Link>
      </div>
    </div>
  );
};
