import React from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/router'

export const ActiveLink = ({ link, className, children, ...props }) => {
  const router = useRouter()
  
  const handleClick = (e) => {
    e.preventDefault()
    router.push(link)
  }
  
  return (
    <a className={className} href={link} onClick={handleClick} {...props}>{children}</a>
    // <Link href={link} scroll={scroll} passHref>
    //
    // </Link>
  )
}
