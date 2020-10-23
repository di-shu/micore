import React from 'react'
import { ProjectMainSection } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/*IMAGES*/
const MainBGMobile = '/images/VipYoga/MainBGMobile.png'
const MainBGDesktop = '/images/VipYoga/yoga_main.jpg'

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
