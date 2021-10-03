import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
  Main,
  About,
  Colors,
  Branding,
  Philosophy,
  BrandingElements,
  LogoDemonstration
} from '../../src/Components/Sections/Projects/PrideGroup'
import '../../src/Styles/Pages/Projects/pride-group.scss'

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
