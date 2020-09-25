import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'

/*IMAGES*/
const MainLogoBlack = '/images/PrideGroup/MainLogoBlack.svg'

export const LogoDemonstration = () => {
  return (
    <SectionLayout id="logo-demonstration" Footer={() => <ImageWrapper isDot/>}>
      <ImageWrapper src={MainLogoBlack} className="logo-image"/>
    </SectionLayout>
  )
}
