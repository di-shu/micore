import React from 'react'
import { MainWrapper } from '~/Components/SectionsComponents'
import {
  Main,
  About,
  Colors,
  Branding,
  Philosophy,
  BrandingElements,
  LogoDemonstration
} from '../../src/Components/Sections/Projects/PrideGroup'
/*STYLES*/
import '~/Styles/Pages/Projects/pride-group.scss'

const PrideGroup = () => {
  return (
    <MainWrapper id="pride-group-project-page">
      <Main/>
      <About/>
      <LogoDemonstration/>
      <Philosophy/>
      <Colors/>
      <Branding/>
      <BrandingElements/>
    </MainWrapper>
  )
}

export default PrideGroup
