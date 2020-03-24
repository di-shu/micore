import React from 'react'
import { PrideBrandbook } from './Config'
import { useDeviceDetect } from '../../../../Helpers'
import { FlipBook, ImageWrapper, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const Car = '/Assets/Images/PrideLogistic/LogoCar.png'

export const Brandbook = () => {
  const { laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-brandbook" Header={() => <ImageWrapper src={Car}/>}>
      <ImageWrapper isDot display={(laptop || desktop)}/>
      <SectionTitle title="Our brandbook"/>
      <FlipBook pages={PrideBrandbook} isNavWhite/>
    </SectionLayout>
  )
}
