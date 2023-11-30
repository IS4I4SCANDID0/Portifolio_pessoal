import { IconProps } from "@/interface/icons.interface";
import Link from "next/link";
import { IoMailOpenOutline } from "react-icons/io5";
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500"]
})

export const EmailContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon

  return (
    <div className="max-w-full lg:p-3 mt-4 flex items-center lg:mt-0">
      <div className="mr-5 mt-[0.3rem] flex items-center justify-center self-start rounded bg-gradient-to-r from-neutral-900 from-20% to-black to-80% p-4">
        <IoMailOpenOutline className="fill-white" size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Meu Email</h3>
        <p className={`${raleway.className} text-sm leading-6 tracking-[0.025rem] lg:text-lg lg:leading-7 font-normal text-zinc-400`}>
          Adoraria receber suas ideias, sugestões e feedbacks por e-mail. Sua
          contribuição é valiosa!
        </p>
        <Link
          target="_blank"
          href={"mailto:isaiascandido92@outlook.com"}
          onClick={() =>
            (window.location.href = "mailto:isaiascandido92@outlook.com")
          }
          className={`max-w-max text-sm lg:text-lg font-normal trackin-[0.025rem] text-zinc-400 hover:custom-text hover:custom-gradient transition duration-150`}
        >
          Envie-me um e-mail
        </Link>
      </div>
    </div>
  );
};
