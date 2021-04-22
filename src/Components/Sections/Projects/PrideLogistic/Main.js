import React from 'react'
import { ProjectMainSection } from '../../../SectionsComponents'

const MainPhoto = '/images/PrideLogistic/pridelog_main.jpg'

export const Main = () => {
  return (
    <ProjectMainSection id="pride-logistic" name="Pride logistics" background={MainPhoto} isContentWhite />
  )
}
