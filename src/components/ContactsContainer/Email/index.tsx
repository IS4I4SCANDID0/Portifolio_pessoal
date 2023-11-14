import { IconProps } from "@/interface/icons.interface";
import { IoMailOpenOutline } from "react-icons/io5";

export const EmailContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="flex items-center justify-evenly border mt-4 border-purple-500">
      <div className="flex items-center justify-center self-start mt-[0.4rem] rounded bg-gradient-to-r from-red-500 from-20% to-red-600 to-80% mr-5 p-4">
        <IoMailOpenOutline className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu Email</h3>
        <p className="text-base font-normal text-gray-400">
          Adoraria receber suas ideias, sugestões e feedbacks por e-mail. Sua contribuição é valiosa!
        </p>
        <span className="text-base font-light text-gray-400">Envie-me um e-mail</span>
      </div>
    </div>
  );
};