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
    <div className={`see-more-link ${display ? 'd-block' : 'd-none'} ${className ? className : ''} ${direction === 'right' ? 'to-right' : 'to-left'}`}>
      <ActiveLink link={nav}>
        <span>{label}</span>
      </ActiveLink>
    </div>
  )
  
}
