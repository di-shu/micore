import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { MenuLinks } from '../Config'
import { useDeviceDetect } from '../../Helpers'
import { ActiveLink, SectionTitle, SocialsWrap } from '../SectionsComponents'

export const MenuContainer = ({ close, open, animation }) => {
  const { mobile } = useDeviceDetect()

  return open && (
    <div className={`menu-wrap ${animation ? 'is-opened' : ''}`}>
      <ListGroup className="list-wrap">
        {MenuLinks.map(({ title, linkTitle, to }, index) => (
          <ListGroup.Item key={`menu-link_${index}`} className="list-item">
            <div className="menu-sub-title-wrap">
              <SectionTitle className="menu-sub-title" title={title} isContentWhite />
              <span className="menu-sub-title-line"/>
            </div>
            <div className="menu-link-wrap">
              <ActiveLink link={to} className="menu-link" onClick={close}>{linkTitle}</ActiveLink>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <SocialsWrap display={mobile} />
      <div className="switch-box">
        <ActiveLink link="/" className="switch-link">
          <p className="switch-name">EN</p>
          <span className="switch-line"/>
        </ActiveLink>
        <ActiveLink link="/" className="switch-link">
          <p className="switch-name">RU</p>
          <span className="switch-line"/>
        </ActiveLink>
        <ActiveLink link="/" className="switch-link">
          <p className="switch-name">UK</p>
          <span className="switch-line"/>
        </ActiveLink>
      </div>
    </div>
  )
}
