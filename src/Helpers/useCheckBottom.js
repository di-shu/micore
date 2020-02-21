import { useEffect, useState } from 'react'

export const useCheckBottom = () => {
  const [isBottom, setIsBottom] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', windowScroll)
    
    return () => window.removeEventListener('scroll', windowScroll)
  }, [])
  
  const windowScroll = () => {
    const windowBottomPosition = window.scrollY + window.innerHeight
    const pageBottomPosition = document.getElementsByTagName('main')[0].offsetHeight
  
    windowBottomPosition === pageBottomPosition ? setIsBottom(true) : setIsBottom(false)
  }
  
  return isBottom
}
