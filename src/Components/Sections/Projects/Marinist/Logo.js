import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const LogoFull = '/images/Marinist/LogoFull.png'

export const Logo = () => {
  return (
    <SectionLayout id="marinist-logo">
      <ImageWrapper src={LogoFull} className="logo-full-image" />
    </SectionLayout>
  )
}
