import React from 'react'
import Link from 'next/link'
import { Socials } from '../Config'

export const SocialsWrap = (props) => {
  const { display = true, firstLoad } = props
  
  return display && (
    <div className="socials-wrap">
      {Socials && Socials.map((item, index) => (
        <Link key={index} href={item.href}>
          <a target="_blank" className={`social-link ${firstLoad && 'on-first-load'}`}>
            <img src={item.src} alt={item.label} />
          </a>
        </Link>
      ))}
    </div>
  )
}
