import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const LogoFull = '/Assets/Images/Marinist/LogoFull.png'

const SectionHeader = () => <ImageWrapper isDot />

export const Logo = () => {
  return (
    <SectionLayout id="marinist-logo" Header={SectionHeader}>
      <ImageWrapper src={LogoFull} className="logo-full-image" />
    </SectionLayout>
  )
}
