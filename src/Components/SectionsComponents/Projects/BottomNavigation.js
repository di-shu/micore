import React from 'react'
import { ScrollBox } from '../ScrollBox'
import { ActiveLink } from '../ActiveLink'
import { useDeviceDetect } from '../../../Helpers'

export const BottomNavigation = ({ link = '#', isBlack }) => {
  const { desktop } = useDeviceDetect()
  
  return (
    <div className="bottom-navigation">
      <ActiveLink link="/portfolio" className={`bottom-project-link ${isBlack ? 'is-black' : ''}`}>
        <span>Все работы</span>
      </ActiveLink>
      <ActiveLink link={link} className={`bottom-project-link ${isBlack ? 'is-black' : ''}`}>
        <span>Перейти на сайт</span>
      </ActiveLink>
      {/*{desktop && (*/}
      {/*  <div className="bottom-scroll-nav">*/}
      {/*    <p className={`bottom-text ${isBlack ? 'is-black' : ''}`}>Contact <span>us</span></p>*/}
      {/*    <ScrollBox isBlack={isBlack} firstLoad={false}/>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  )
}
