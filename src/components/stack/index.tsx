"use client"
import { ChildrenProps, StackProps } from "@/interface/stack.interface"

export const Stack = ({ children }: ChildrenProps, { key, title, icon}: StackProps): JSX.Element => {
  return (
    <ul className="w-11/12 lg:w-full min-h-[100px] xl:w-full flex flex-row overflow-x-auto gap-24 pt-8 pb-4 lg:overflow-x-hidden lg:grid lg:grid-cols-4 lg:gap-8 lg:py-24 lg:px-0 lg:ml-0" >
      {children}
    </ul>
  )
}  