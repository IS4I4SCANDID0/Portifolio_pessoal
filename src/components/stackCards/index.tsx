"use client"
import { StackProps } from "@/interface/stack.interface"

export const StackCard = ({ title, icon: Icon }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";
  
  return (
    <div className="border border-red-500 max-w-[135px] gap-4 flex flex-col justify-center items-center mt-4 group:">
      {isString ? (
         <img src={Icon} alt={title} title={title} />
      ): (
        Icon ? <Icon className="fill-gray-500 transform transition-transform duration-500 hover:scale-105 hover:fill-slate-300" size={84} /> : null
      )}
      <h2 className="hidden group-hover:block group-hover:text-center group-hover:text-stack-text">{title}</h2>
    </div>
  )
}