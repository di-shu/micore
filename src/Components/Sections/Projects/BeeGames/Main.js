import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../../Components'

const MainBG = '/images/BeeGames/MainBG.svg'
const MainImage = '/images/BeeGames/MainImage.png'

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
