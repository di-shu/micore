import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'

const DesktopMac = '/images/Balkany/AboutDesktopMac.png'
const DesktopMacFull = '/images/Balkany/balkany_mockup9.jpg'

export const Desktop = () => {
  return (
    <SectionLayout id="balkany-about-desktop" Footer={() => <ImageWrapper src={DesktopMacFull} className="full-mac"/>}>
      <SectionTitle title="Клуб"/>
      <SectionDesc>
        Также на сайте вы сможете найти информацию про игроков, тренеров, руководство и персонал. Помимо этого можно
        следить за результатами и календарём матчей, турнирной таблицей и ознакомиться о клубе.
      </SectionDesc>
      <ImageWrapper src={DesktopMac} className="desktop-mac"/>
    </SectionLayout>
  )
}
