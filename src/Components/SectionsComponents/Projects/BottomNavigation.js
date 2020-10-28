import React from 'react'
import { ActiveLink } from '../ActiveLink'

export const BottomNavigation = ({ link = '#', isBlack }) => {
  return (
    <div className="bottom-navigation">
      <ActiveLink link="/portfolio" className={`bottom-project-link ${isBlack ? 'is-black' : ''}`}>
        <span>Все работы</span>
      </ActiveLink>
      <a
        target="_blank"
        href={`http://${link}`}
        rel="noopener noreferrer"
        className={`bottom-project-link ${isBlack ? 'is-black' : ''}`}
      >
        <span>Перейти на сайт</span>
      </a>
    </div>
  )
}
