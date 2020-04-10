import React from 'react'
import { ProjectMainSection } from '../../../../Components'
/*IMAGES*/
const MainBG = '/Assets/Images/Gastrobar/MainBG.png'

export const Main = () => {
  return (
    <ProjectMainSection id="gastrobar" name="Gastrobar" background={MainBG} isContentWhite />
  )
}