import React, { useState } from 'react'
import { Header, MenuContainer, MetaHead } from '../SiteHeader'

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const openMenu = () => {
    setIsMenuOpen(true)
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <div className="page-wrapper">
      <MetaHead/>
      <Header open={openMenu}/>
      {children}
      <MenuContainer open={isMenuOpen} close={closeMenu}/>
    </div>
  )
}
