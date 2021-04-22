import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const DesktopPC = '/images/BeeGames/DesktopPC.png'
const NintendoSwitch = '/images/BeeGames/NintendoSwitch.png'

export const Devices = () => {
  return (
    <SectionLayout id="bee-games-devices">
      <ImageWrapper src={NintendoSwitch} className="nintendo-image"/>
      <ImageWrapper src={DesktopPC} className="desktop-image"/>
    </SectionLayout>
  )
}
