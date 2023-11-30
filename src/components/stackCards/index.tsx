"use client"
import { useMediaScreen } from "@/hooks/screenMedia";
import { StackProps } from "@/interface/stack.interface"

export const StackCard = ({ title, icon: Icon }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";
  const iPadAirStyle = useMediaScreen(820)
  
  return (
    <li className={`max-w-[135px] min-h-[115px] gap-4 flex flex-col justify-center items-center mt-4 ${iPadAirStyle ? "mx-auto" : ""}`}>
      {isString ? (
         <img src={Icon} alt={title} title={title} />
      ): (
        Icon ? <Icon className="fill-gray-500 transform transition-transform duration-500 hover:scale-105 hover:fill-slate-300" size={90} /> : null
      )}
      <h2 className="hidden group-hover:block group-hover:text-center group-hover:text-stack-text">{title}</h2>
    </li>
  )
}