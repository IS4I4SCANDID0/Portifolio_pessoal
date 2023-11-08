"use client"
import { ChildrenProps, StackProps } from "@/interface/stack.interface"

export const Stack = ({ children }: ChildrenProps, { key, title, icon}: StackProps): JSX.Element => {
  return (
    <section className="border border-red-600 w-3/5 grid grid-cols-5 gap-14 py-24">
      {children}
    </section>
  )
}  