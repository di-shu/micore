import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/*IMAGES*/
const MainLogoBlack = '/Assets/Images/PrideGroup/MainLogoBlack.svg'

export const LogoDemonstration = () => {
  return (
    <SectionLayout id="logo-demonstration" Footer={() => <ImageWrapper isDot/>}>
      <ImageWrapper src={MainLogoBlack} className="logo-image"/>
    </SectionLayout>
  )
}
