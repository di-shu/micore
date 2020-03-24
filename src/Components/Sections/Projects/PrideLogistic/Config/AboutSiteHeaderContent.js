import React from 'react'
import { useDeviceDetect } from '../../../../../Helpers'
import { ImageWrapper } from '../../../../SectionsComponents'

export const AboutSiteHeaderContent = () => {
  const { laptop, desktop } = useDeviceDetect()
  
  return (
    <>
      <ImageWrapper isDot display={laptop || desktop}/>
      <ImageWrapper isDot className="bottom"/>
    </>
  )
}
