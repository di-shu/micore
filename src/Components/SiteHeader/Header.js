import React from 'react'
import '../../Styles/Includes/header.scss'
import { ActiveLink } from '../SectionsComponents'

const Logo = '/Assets/Images/logo.svg'

export const Header = ({ open }) => {
  return (
    <header className="site-header">
      <div className="logo">
        <ActiveLink link="/">
          <img src={Logo} alt="Logo"/>
        </ActiveLink>
      </div>
      <div className="menu" onClick={open}>
        <span/>
        <span/>
        <span/>
      </div>
    </header>
  )
}
