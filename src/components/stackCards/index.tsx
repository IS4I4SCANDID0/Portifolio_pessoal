"use client"
import { StackProps } from "@/interface/stack.interface"
import { IconType } from "react-icons/lib"

export const StackCard = ({ title, icon: Icon }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";
  
  return (
    <div className="border border-red-500 w-40 gap-4 flex flex-col justify-center items-center mt-4">
      {isString ? (
         <img src={Icon} alt={title} title={title} />
      ): (
        Icon ? <Icon className="transform transition-transform duration-500 hover:scale-105" size={84} color="#adb5bd" /> : null
      )}
      <h2 className="text-stack-text">{title}</h2>
    </div>
  )
}