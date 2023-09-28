import { IconType } from "react-icons/lib";
import { ReactNode } from "react";

export interface ChildrenProps {
  children: React.ReactNode
}

export interface StackProps {
  title: string;
  icon?: IconType | string;
  key: number
  chiidren?: ChildrenProps;
}


