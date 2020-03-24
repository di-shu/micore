import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
/* IMAGES */
const EagleImg = '/Assets/Images/ZlataProject/Eagle.png'
const WheatImg = '/Assets/Images/ZlataProject/Wheat.svg'

const SectionContent = () => (
  <>
    <ImageWrapper src={EagleImg} className="image-eagle" />
    <ImageWrapper src={WheatImg} className="image-wheat" />
  </>
)

export const Main = () => {
  return (
    <ProjectMainSection
      isContentWhite
      id="zlata-trade"
      name="Zlata-trade"
      content={SectionContent}
    />
  )
}
