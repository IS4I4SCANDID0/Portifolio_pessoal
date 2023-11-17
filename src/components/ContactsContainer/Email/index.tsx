import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { IoMailOpenOutline } from "react-icons/io5";

export const EmailContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="max-w-full lg:p-3 mt-4 flex items-center border border-purple-500">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-zinc-600 from-20% to-zinc-800 to-80% p-4">
        <IoMailOpenOutline className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu Email</h3>
        <p className="text-lg font-normal text-gray-400">
          Adoraria receber suas ideias, sugestões e feedbacks por e-mail. Sua
          contribuição é valiosa!
        </p>
        <Link
          target="_blank"
          href={"mailto:isaiascandido92@outlook.com"}
          onClick={() =>
            (window.location.href = "mailto:isaiascandido92@outlook.com")
          }
          className={`max-w-max text-lg font-normal text-gray-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Envie-me um e-mail
        </Link>
      </div>
    </div>
  );
};
