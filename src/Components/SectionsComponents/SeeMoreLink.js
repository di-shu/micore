import React from 'react'
import { ActiveLink } from './ActiveLink'

export const SeeMoreLink = (props) => {
  const {
    className,
    display = true,
    direction = 'left',
    nav = '/portfolio',
    label = 'See works'
  } = props
  
  return (
    <div className={`see-more-link ${className ? className : ''} ${direction === 'right' ? 'to-right' : 'to-left'}`} style={{ display: display ? 'block' : 'none' }}>
      <ActiveLink link={nav}>
        <span>{label}</span>
      </ActiveLink>
    </div>
  )
  
}
