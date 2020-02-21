import { useEffect, useState } from 'react'

export const useDeviceDetect = (isHigher = false) => {
  const [isLaptop, setIsLaptop] = useState(false)
  
  useEffect(() => {
    const width = window.innerWidth
    
    if (isHigher) {
      width > 992 ? setIsLaptop(true) : setIsLaptop(false)
    } else {
      width > 992 && width < 1199  ? setIsLaptop(true) : setIsLaptop(false)
    }
  }, [])
  
  return isLaptop
}
