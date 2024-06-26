import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
/*IMAGES*/
const MainBG = '/images/PrideGroup/MainBG.jpg'
const MainLogo = '/images/PrideGroup/MainLogo.svg'

const SectionContent = () => <ImageWrapper src={MainLogo} className="main-logo" />

export const Main = () => {
  return (
    <ProjectMainSection id="pride-group" name="PRide Group" background={MainBG}  isContentWhite />
  )
}
