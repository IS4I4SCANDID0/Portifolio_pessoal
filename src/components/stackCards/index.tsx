"use client";
import { useMediaScreen } from "@/hooks/screenMedia";
import { StackProps } from "@/interface/stack.interface";
import { NextFont } from "next/dist/compiled/@next/font";
import { Roboto_Flex } from "next/font/google";
import Image from "next/image";

const robotoFlex: NextFont = Roboto_Flex({
  subsets: ["latin"],
  weight: [ "400", "500"],
})

export const StackCard = ({ title, icon: Icon }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";
  const iPadAirStyle = useMediaScreen(820);

  return (
    <li
      className={`min-w-[100px] min-h-[80px] lg:min-w-fit lg:max-h-[120px] gap-4 flex flex-col justify-center items-center mt-4 ${
        iPadAirStyle ? "mx-auto" : ""
      }`}
    >
      <div >
        {isString ? (
          <Image
            src={Icon}
            alt={title}
            title={title}
            width={70}
            height={70}
            className="h-auto w-auto"
          />
        ) : Icon ? (
          <Icon
            className="fill-gray-500 transform transition-transform duration-500 hover:scale-105 hover:fill-slate-300"
            size={70}
          />
        ) : null}
      </div>
      <p className={`${robotoFlex.className} text-center lg:hidden lg:group-hover:block lg:group-hover:text-center lg:group-hover:text-stack-text`}>
        {title}
      </p>
    </li>
  );
};
