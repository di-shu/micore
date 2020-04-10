import React from 'react'
import { draw, setup, useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
import dynamic from 'next/dynamic'
const Sketch = dynamic(() => import('react-p5'), { ssr: false })
/*IMAGES*/
const MainImg = '/Assets/Images/ManticoreProject/MainStatue.png'

const MainSectionFooterContent = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return minWidthLaptop ? (
    <Sketch setup={setup(MainImg, true, 'center')} draw={draw} className="section-image-wrap main-statue"/>
  ) : (
    <ImageWrapper src={MainImg} className="main-statue"/>
  )
}

export const Main = () => {
  return (
    <ProjectMainSection id="manticore" name="Manticore" content={MainSectionFooterContent} isContentWhite/>
  )
}
