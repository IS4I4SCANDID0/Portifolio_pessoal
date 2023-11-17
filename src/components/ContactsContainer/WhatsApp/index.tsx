import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

export const WhatsAppContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="mt-4 flex max-w-full items-center lg:p-3 border border-red-500">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-green-400 from-20% to-green-500 to-80% p-4">
        <SiWhatsapp className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu WhatsApp</h3>
        <p className="text-lg font-normal text-gray-400">
          Vamos conversar sobre criatividade? Estou disponível para chat ou
          chamada de voz.
        </p>
        <Link
          target="_blank"
          href={
            "https://api.whatsapp.com/send?phone=+55 9 91823188&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
          }
          className={`max-w-max text-lg font-normal text-gray-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Fale comigo
        </Link>
      </div>
    </div>
  );
};
