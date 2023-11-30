"use client"
import { useMediaScreen } from "@/hooks/screenMedia"
import { ChildrenProps, StackProps } from "@/interface/stack.interface"

export const Stack = ({ children }: ChildrenProps, { key, title, icon}: StackProps): JSX.Element => {
  const iPadAirStyle = useMediaScreen(820) 

  return (
    <ul className={`w-11/12 lg:w-full min-h-[100px] max-h-[2580px] xl:w-full flex flex-row overflow-x-auto gap-24 pt-4 pb-9 lg:overflow-x-hidden ${iPadAirStyle ? "w-9/12 grid grid-cols-2 px-0 overflow-x-hidden mx-auto pt-20 border-2 border-emerald-500 mb-8" : ""} lg:grid lg:grid-cols-4 lg:gap-8 lg:py-24 lg:px-0 lg:ml-0`}>
      {children}
    </ul>
  )
}  