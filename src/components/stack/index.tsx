"use client"
import { useMediaScreen } from "@/hooks/screenMedia"
import { ChildrenProps } from "@/interface/stack.interface"

export const Stack = ({ children }: ChildrenProps): JSX.Element => {
  const iPadAirStyle = useMediaScreen(768) 

  return (
    <ul className={`max-w-full max-h-full flex flex-row overflow-x-auto gap-24 lg:gap-20 lg:px-0 py-12 lg:overflow-x-hidden ${iPadAirStyle ? "w-full grid grid-cols-2 px-0 overflow-x-hidden pt-20 mb-8 mx-auto" : ""} lg:w-full lg:grid lg:py-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
      {children}
    </ul>
  )
}  