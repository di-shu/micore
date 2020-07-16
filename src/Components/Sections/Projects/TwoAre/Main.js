import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { ProjectMainSection } from '../../../SectionsComponents'
/*IMAGES*/
const MainBG = '/images/TwoAre/MainBG.png'
const MainBGMobile = '/images/TwoAre/MainBGMobile.png'

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
