import React from 'react'
import { useDeviceDetect } from '../../../../../Helpers'
import { ImageWrapper } from '../../../../SectionsComponents'
/*IMAGES*/


export const HomePageHeaderContent = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return !minWidthLaptop && (
    <>
      <ImageWrapper src={PageScreen1} className="screen-page-1"/>
      <ImageWrapper src={PageScreen2} className="screen-page-2"/>
      <ImageWrapper src={Broccoli} className="broccoli-image"/>
      <ImageWrapper isDot className="top-dots"/>
    </>
  )
}
