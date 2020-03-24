import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
/*IMAGES*/
const MainBG = '/Assets/Images/PrideGroup/MainBG.png'
const MainLogo = '/Assets/Images/PrideGroup/MainLogo.svg'

const SectionContent = () => <ImageWrapper src={MainLogo} className="main-logo" />

export const Main = () => {
  return (
    <ProjectMainSection id="pride-group" name="PRide Group" background={MainBG} content={SectionContent} isContentWhite />
  )
}
