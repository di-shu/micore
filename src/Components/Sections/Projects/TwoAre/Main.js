import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { ProjectMainSection } from '../../../SectionsComponents'
/*IMAGES*/
const MainBG = '/Assets/Images/TwoAre/MainBG.png'
const MainBGMobile = '/Assets/Images/TwoAre/MainBGMobile.png'

export const Main = () => {
  const { mobile } = useDeviceDetect()

  return (
    <ProjectMainSection
      id="two-are"
      name="Two are"
      isContentWhite
      background={mobile ? MainBGMobile : MainBG}
    />
  )
}
