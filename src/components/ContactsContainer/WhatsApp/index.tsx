import { IconProps } from "@/interface/icons.interface";
import { SiWhatsapp } from "react-icons/si";

export const WhatsAppContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="mt-4 flex items-center justify-evenly border border-red-500">
      <div className="mr-5 mt-[0.4rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-green-400 from-20% to-green-500 to-80% p-4">
        <SiWhatsapp className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu WhatsApp</h3>
        <p className="text-base font-normal text-gray-400">
          Vamos conversar sobre criatividade? Estou disponível para chat ou
          chamada de voz.
        </p>
        <span className="text-base font-light text-gray-400">Fale comigo</span>
      </div>
    </div>
  );
};
