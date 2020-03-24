import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../../Components'
/* IMAGES */
const MainBG = '/Assets/Images/BeeGames/MainBG.png'
const MainImage = '/Assets/Images/BeeGames/MainImage.png'

const SectionContent = () => <ImageWrapper src={MainImage} className="main-image" />

export const Main = () => {
  return (
    <ProjectMainSection
      id="bee-games"
      isContentWhite
      name="Bee Games"
      background={MainBG}
      content={SectionContent}
    />
  )
}
