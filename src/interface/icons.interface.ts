import { IconType } from "react-icons/lib";

export interface IconProps {
  Icon?: IconType,
  size?: number,
  className?: string
}


export interface INavLinksProps {
  isToggleMenu: boolean
  handleDrop: () => void
}