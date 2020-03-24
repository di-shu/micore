import React from 'react'
import { ProjectMainSection } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/*IMAGES*/
const MainBGMobile = '/Assets/Images/VipYoga/MainBGMobile.png'
const MainBGDesktop = '/Assets/Images/VipYoga/MainBGDesktop.png'

export const Main = () => {
  const { mobile, minWidthLaptop } = useDeviceDetect()
  
  return (
    <ProjectMainSection
      id="vip-yoga"
      name="Vip yoga"
      isNavBlack={!minWidthLaptop}
      isContentWhite={minWidthLaptop}
      background={mobile ? MainBGMobile : MainBGDesktop}
    />
  )
}
