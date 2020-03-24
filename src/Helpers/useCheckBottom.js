import { useEffect, useState } from 'react'

export const useCheckBottom = () => {
  const [isBottom, setIsBottom] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', windowScroll)
    
    return () => {
      window.removeEventListener('scroll', windowScroll)
    }
  }, [])

  const windowScroll = () => {
    const windowBottomPosition = Math.round(window.scrollY + window.innerHeight)
    const pageBottomPosition = document.getElementsByTagName('main')[0].offsetHeight

    if (windowBottomPosition === pageBottomPosition) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }
  
  return isBottom
}
