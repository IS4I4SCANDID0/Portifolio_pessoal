"use client"
import { ChildrenProps, StackProps } from "@/interface/stack.interface"

export const Stack = ({ children }: ChildrenProps, { key, title, icon}: StackProps): JSX.Element => {
  return (
    <section className="border border-red-600 w-11/12 lg:w-9/12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16 py-24">
      {children}
    </section>
  )
}  