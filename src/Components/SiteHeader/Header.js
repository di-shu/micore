import React, { useState } from 'react'
import { MenuContainer } from './Menu'
import { ActiveLink } from '../SectionsComponents'
/*STYLES*/
import '~/Styles/Includes/header.scss'
/*IMAGES*/
const Logo = '/Assets/Images/logo.svg'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)

    setTimeout(() => {
      setIsOpened(true)
    }, 200)
  }

  const closeMenu = () => {
    setIsOpened(false)

    setTimeout(() => {
      setIsMenuOpen(false)
    }, 1200)
  }

  return (
    <>
      <MenuContainer open={isMenuOpen} animation={isOpened} close={closeMenu}/>
      <header className="site-header">
        <div className="logo">
          <ActiveLink link="/">
            <img src={Logo} alt="Logo"/>
          </ActiveLink>
        </div>
        <div className="menu" onClick={openMenu}>
          <span/>
          <span/>
          <span/>
        </div>
      </header>
    </>
  )
}
