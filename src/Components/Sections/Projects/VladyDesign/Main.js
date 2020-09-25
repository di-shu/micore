import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
/* IMAGES */
const MainLogo = '/images/VladyDesign/VladyMainLogo.png'
const MainBG = '/images/VladyDesign/VladyMainImage.jpg'

const SectionContent = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return (
    <ImageWrapper src={MainLogo} className="main-logo" display={minWidthLaptop} />
  )
}

export const Main = () => {
  return (
    <ProjectMainSection
      isNavBlack
      id="vlady-design"
      name="Vlady design"
      background={MainBG}
      content={SectionContent}
    />
  )
}
