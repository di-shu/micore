import React from 'react'
import Link from 'next/link'

export const ActiveLink = ({ link, className, children, ...props }) => {
  return (
    <Link href={link}>
      <a className={className} {...props}>{children}</a>
    </Link>
  )
}
