import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const ActiveLink = ({ link, className, locale, children, isBlank, ...props }) => {
  const router = useRouter()

  return locale ? (
    <div className={className} onClick={() => router.push('/', undefined, locale)} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  ) : (
    <Link href={link} passHref>
      <a className={className} target={isBlank && '_blank'} children={children} {...props}/>
    </Link>
  )
}
