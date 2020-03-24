import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
/* IMAGES */
const MainLogo = '/Assets/Images/VladyDesign/VladyMainLogo.png'
const MainBG = '/Assets/Images/VladyDesign/VladyMainImage.png'

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
