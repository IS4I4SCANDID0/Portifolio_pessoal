import { IconProps } from "@/interface/icons.interface";
import { FaLinkedinIn } from "react-icons/fa6";

export const LinkedInContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="mt-4 flex items-center justify-evenly border border-red-500">
      <div className="mr-5 mt-[0.4rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-blue-400 from-20% to-blue-500 to-80% p-4">
        <FaLinkedinIn className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu LinkedIn</h3>
        <p className="text-base font-normal text-gray-400">
          Podemos criar interações frequentes e uma rede de compartilhamento.
        </p>
        <span className="text-base font-light text-gray-400">Fale comigo</span>
      </div>
    </div>
  );
};
