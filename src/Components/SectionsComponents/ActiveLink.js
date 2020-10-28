import React from 'react'
import { useRouter } from 'next/router'

export const ActiveLink = ({ link, className, children, isBlank, ...props }) => {
  const router = useRouter()
  
  const handleClick = (e) => {
    e.preventDefault()
    router.push(link)
  }
  
  return (
    <a className={className} href={link} target={isBlank && "_blank"} onClick={handleClick} {...props}>{children}</a>
  )
}
