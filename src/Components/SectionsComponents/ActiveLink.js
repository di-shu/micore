import React from 'react'
import Link from 'next/link'

export const ActiveLink = ({ link, className, locale, children, isBlank, ...props }) => {
  return locale ? (
    <Link href="/" locale={locale}>
      <a className={className} children={children}/>
    </Link>
  ) : (
    <Link href={link} passHref>
      <a className={className} target={isBlank && '_blank'} children={children} {...props}/>
    </Link>
  )
}
