import { IconProps } from "@/interface/icons.interface"
 
export const WhatsAppContainer = ({ Icon }: IconProps): JSX.Element => {
  // const isIcon = typeof Icon
  
  return (
    <div>
      <div className="w-16 h-16 flex justify-center items-center">
        <Icon size={64} color="#DCDCDC"/>
      </div>
    </div>
  )
}