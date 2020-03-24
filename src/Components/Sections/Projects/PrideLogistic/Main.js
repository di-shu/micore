import React from 'react'
import { ProjectMainSection } from '../../../SectionsComponents'
/* IMAGES */
const MainPhoto = '/Assets/Images/PrideLogistic/MainPhoto.png'

export const Main = () => {
  return (
    <ProjectMainSection id="pride-logistic" name="Pride logistics" background={MainPhoto} isContentWhite />
  )
}
