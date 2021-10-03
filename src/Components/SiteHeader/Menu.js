import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import useTranslation from 'next-translate/useTranslation'
import { MenuLinks } from '../Config'
import i18nConfig from '../../../i18n.json'
import { useDeviceDetect } from '../../Helpers'

import { ActiveLink, SectionTitle, SocialsWrap } from '../SectionsComponents'

export const MenuContainer = ({ close, open, animation }) => {
  const { mobile } = useDeviceDetect()
  const { t, lang } = useTranslation('menu')

  return open && (
    <div className={`menu-wrap ${animation ? 'is-opened' : ''}`}>
      <ListGroup className="list-wrap">
        {MenuLinks.map(({ title, linkTitle, to }, index) => {
          const type = to.split('/')[1]

          return (
            <ListGroup.Item key={`menu-link_${index}`} className="list-item">
              <div className="menu-sub-title-wrap">
                <SectionTitle className="menu-sub-title" title={t(`${type}.${title}`)} isContentWhite />
                <span className="menu-sub-title-line"/>
              </div>
              <div className="menu-link-wrap">
                <ActiveLink link={to} className="menu-link" onClick={close}>{t(`${type}.${linkTitle}`)}</ActiveLink>
              </div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
      <SocialsWrap display={mobile}/>
      <div className="switch-box">
        {i18nConfig.locales.map((lng) => (
          <ActiveLink key={lng} link="/" locale={lng} className={`switch-link ${lang === lng ? 'active' : ''}`}>
            <p className="switch-name">{lng}</p>
            <span className="switch-line"/>
          </ActiveLink>
        ))}
      </div>
    </div>
  )
}
