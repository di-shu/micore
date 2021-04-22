import React from 'react'
import { PrideBrandbook } from './Config'
import { useDeviceDetect } from '../../../../Helpers'
import { FlipBook, ImageWrapper, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const Car = '/images/PrideLogistic/pridelog_mockup2.jpg'

export const Brandbook = () => {
  const { laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-brandbook" Header={() => <ImageWrapper className="pride-brandbook-car" src={Car}/>}>
      <ImageWrapper isDot display={(laptop || desktop)}/>
      <SectionTitle title="Our brandbook"/>
      <FlipBook pages={PrideBrandbook} isNavWhite/>
    </SectionLayout>
  )
}
