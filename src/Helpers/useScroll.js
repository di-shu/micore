import { useState, useEffect } from 'react'

const SCROLL_UP = 'up'
const SCROLL_DOWN = 'down'

export const useScroll = ({ initialDirection } = {}) => {
  const [isBottom, setIsBottom] = useState(false)
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false
    
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      
      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }
    
    const onScroll = () => {
      const windowBottomPosition = Math.round(window.scrollY + window.innerHeight)
      const pageBottomPosition = document.getElementsByTagName('main')[0].offsetHeight

      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }

      if (windowBottomPosition === pageBottomPosition) {
        setIsBottom(true)
      } else {
        setIsBottom(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    setScrollDir(initialDirection)
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  return { isBottom, scrollDir }
}