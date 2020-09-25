import React from 'react'
import Link from 'next/link'

export const ActiveLink = ({ link, scroll = true, className, children, ...props }) => {
  return (
    <Link href={link} scroll={scroll} passHref>
      <a className={className} {...props}>{children}</a>
    </Link>
  )
}
