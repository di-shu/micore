import React, { useState } from 'react'
import { MenuContainer } from './Menu'
import { ActiveLink } from '../SectionsComponents'
/*IMAGES*/
const Logo = '/Assets/Images/logo.svg'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)

    setTimeout(() => {
      setIsOpened(true)
    }, 200)
  }

  const closeMenu = () => {
    setIsOpened(!isMenuOpen)

    setTimeout(() => {
      setIsMenuOpen(false)
    }, 2000)
  }

  return (
    <>
      <MenuContainer open={isMenuOpen} animation={isOpened}/>
      <header className="site-header">
        <div className="logo">
          <ActiveLink link="/">
            <img src={Logo} alt="Logo"/>
          </ActiveLink>
        </div>
        <div className={`menu ${isOpened ? 'is-opened' : 'is-closed'}`} onClick={isMenuOpen ? closeMenu : openMenu}>
          <span/>
          <span/>
          <span/>
          <span className="close-line"/>
          <span className="close-line"/>
        </div>
      </header>
    </>
  )
}
