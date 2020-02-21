import React from 'react'
import Link from 'next/link'
import { isMobileOnly } from 'react-device-detect'
import ListGroup from 'react-bootstrap/ListGroup'
import { MenuLinks } from '../Config'
import { SectionTitle, SocialsWrap } from '../SectionsComponents'

export const MenuContainer = (props) => {
  const { close, open } = props
  
  return (
    <div className={`menu-wrap ${open ? 'is-opened' : ''}`}>
      {!isMobileOnly && <p className="switch-title">Sound</p>}
      <div className="close-icon" onClick={close}>
        <span/>
        <span/>
      </div>
      <ListGroup className="list-wrap">
        {MenuLinks.map(({ title, linkTitle, to }, index) => (
          <ListGroup.Item key={`menu-link_${index}`} className="list-item">
            <div className="menu-sub-title-wrap">
              <SectionTitle className="menu-sub-title" title={title} isContentWhite />
              <span className="menu-sub-title-line"/>
            </div>
            <div className="menu-link-wrap">
              <Link href={to}>
                <a className="menu-link" onClick={close}>{linkTitle}</a>
              </Link>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {!isMobileOnly && (
        <div className="switch-box switch-box_sound">
          <div className="switch-link">
            <span className="switch-line"/>
            <p className="switch-name">On</p>
          </div>
          <div className="switch-link">
            <span className="switch-line"/>
            <p className="switch-name">Off</p>
          </div>
        </div>
      )}
      <div className="switch-box">
        <Link href="/">
          <a  className="switch-link">
            <p className="switch-name">EN</p>
            <span className="switch-line"/>
          </a>
        </Link>
        <Link href="/">
          <a  className="switch-link">
            <p className="switch-name">RU</p>
            <span className="switch-line"/>
          </a>
        </Link>
      </div>
      <SocialsWrap display={isMobileOnly} />
    </div>
  )
}
