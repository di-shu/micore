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
  const customClassName = `see-more-link ${display ? 'd-block' : 'd-none'} ${className ? className : ''} ${direction === 'right' ? 'to-right' : 'to-left'}`
  
  return (
    <div className={customClassName}>
      <ActiveLink link={nav}><span>{label}</span></ActiveLink>
    </div>
  )
  
}
