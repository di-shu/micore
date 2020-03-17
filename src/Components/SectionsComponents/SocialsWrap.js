import React from 'react'
import { Socials } from '../Config'
import { ActiveLink } from './ActiveLink'

export const SocialsWrap = (props) => {
  const { display = true, firstLoad } = props
  
  return display && (
    <div className="socials-wrap">
      {Socials && Socials.map((item, index) => (
        <ActiveLink key={index} link={item.href} target="_blank" className={`social-link ${firstLoad && 'on-first-load'}`}>
          <img src={item.src} alt={item.label} />
        </ActiveLink>
      ))}
    </div>
  )
}
