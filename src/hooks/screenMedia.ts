import { useEffect, useState } from "react"

export const useMediaScreen = (breakpoint: number): boolean => {
  const [isScreenSize, setIsScreenSize] = useState<boolean>(true)

  useEffect(() => {
    const measureScreen = (): void => {
      if(window.innerWidth < breakpoint) {
        setIsScreenSize(false)

      } else if (window.innerWidth >= breakpoint) {
        setIsScreenSize(true)
      }
    }
    measureScreen()

    window.addEventListener("resize", measureScreen);

    return () => {
      window.removeEventListener("resize", measureScreen)
    }
  }, [])

  return isScreenSize
} 