import { IconProps } from "@/interface/icons.interface";
import { SiWhatsapp } from "react-icons/si";

export const WhatsAppContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="flex items-center justify-evenly bg-red-500">
      <div className="flex w-11 items-center justify-center border-green-400 mr-4">
        <SiWhatsapp className="fill-green-500" size={50} />
      </div>
      <div >
        <h3>Meu WhatsApp</h3>
        <p>
          Estou disponível para um chat ou chamada de voz, vamos juntos falar de
          criatividade?
        </p>
        <span>Fale comigo</span>
      </div>
    </div>
  );
};
