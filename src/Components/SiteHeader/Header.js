import React, { useState } from 'react'
import Link from 'next/link'
import { MenuContainer } from './Menu'
import '../../Styles/Includes/header.scss'

const Logo = '/Assets/Images/logo.svg'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const openMenu = () => {
    setIsMenuOpen(true)
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <>
      <div className="logo">
        <Link href="/">
          <a><img src={Logo} alt="Logo"/></a>
        </Link>
      </div>
      <div className="menu" onClick={openMenu}>
        <span/>
        <span/>
        <span/>
      </div>
      <MenuContainer open={isMenuOpen} close={closeMenu}/>
    </>
  )
}
