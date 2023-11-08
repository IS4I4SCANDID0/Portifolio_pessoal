import { useEffect, useState } from "react"

export const useMediaScreen = (breakpoint: number): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  
  useEffect(() => {
    const measureScreen = (): void => {
      if(window.innerWidth < breakpoint) {
        setIsMobile(true)

      } else if (window.innerWidth >= breakpoint) {
        setIsMobile(false)
      }
    }
    measureScreen()

    window.addEventListener("resize", measureScreen);

    return () => {
      window.removeEventListener("resize", measureScreen)
    }
  }, [])

  return isMobile
} 


// bg-gradient-to-r from-green-400 to-blue-500