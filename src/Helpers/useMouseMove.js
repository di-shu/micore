import { useState } from 'react'

let x

export const useMouseMove = () => {
  const [mouseStp, setMouseStp] = useState(true)
  
  const mouseMoveFn = () => {
    if (x) {
      setMouseStp(false)
      clearTimeout(x)
    }
    
    x = setTimeout(() => {
      setMouseStp(true)
    }, 500)
  }
  
  return [mouseStp, mouseMoveFn]
}
