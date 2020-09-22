import React from 'react'
import { MainWrapper } from '~/Components/SectionsComponents'
import {
  About,
  Branding,
  BrandingElements,
  Colors,
  LogoDemonstration,
  Main,
  Philosophy,
  Symbol
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
      <Symbol/>
    </MainWrapper>
  )
}

export default PrideGroup
