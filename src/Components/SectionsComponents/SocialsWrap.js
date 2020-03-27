import React from 'react'
import { Socials } from '../Config'
import { ActiveLink } from './ActiveLink'

export const SocialsWrap = (props) => {
  const { display = true, firstLoad } = props
  
  return (
    <div className={`socials-wrap ${display ? 'd-flex' : 'd-none'}`}>
      {Socials && Socials.map((item, index) => (
        <ActiveLink key={index} link={item.href} target="_blank" className={`social-link ${firstLoad ? 'on-first-load' : ''}`}>
          <img src={item.src} alt={item.label} />
        </ActiveLink>
      ))}
    </div>
  )
}
