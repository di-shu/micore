import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const DesktopPC = '/Assets/Images/BeeGames/DesktopPC.png'
const NintendoSwitch = '/Assets/Images/BeeGames/NintendoSwitch.png'

export const Devices = () => {
  return (
    <SectionLayout id="bee-games-devices">
      <ImageWrapper src={NintendoSwitch} className="nintendo-image"/>
      <ImageWrapper src={DesktopPC} className="desktop-image"/>
    </SectionLayout>
  )
}
