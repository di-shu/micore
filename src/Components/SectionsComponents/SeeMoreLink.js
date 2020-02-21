import React from 'react'
import Link from 'next/link'

export const SeeMoreLink = (props) => {
  const {
    className,
    display = true,
    direction = 'left',
    nav = '/portfolio',
    label = 'See works'
  } = props
  const customClassName = `see-more-link ${className ? className : ''} ${direction === 'right' ? 'to-right' : 'to-left'}`
  
  return display &&
    <div className={customClassName}>
      <Link href={nav}>
        <a><span>{label}</span></a>
      </Link>
    </div>
}
