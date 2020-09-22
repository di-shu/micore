import React from 'react'
import Link from 'next/link'

export const ActiveLink = ({ link, scroll = true, className, children, ...props }) => {
  return (
    <Link href={`${link}.html`} as={link} scroll={scroll}>
      <a className={className} {...props}>{children}</a>
    </Link>
  )
}
