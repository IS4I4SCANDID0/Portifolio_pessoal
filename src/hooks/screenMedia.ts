import { useEffect, useState } from "react"

export const useMediaScreen = (breakpoint: number): boolean => {
  const [isIPadAir, setIsIPadAir] = useState<boolean>(true)

  useEffect(() => {
    const measureScreen = (): void => {
      if(window.innerWidth < breakpoint) {
        setIsIPadAir(false)

      } else if (window.innerWidth >= breakpoint) {
        setIsIPadAir(true)
      }
    }
    measureScreen()

    window.addEventListener("resize", measureScreen);

    return () => {
      window.removeEventListener("resize", measureScreen)
    }
  }, [])

  return isIPadAir
} 