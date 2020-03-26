import React from 'react'
import {
  Main,
  About,
  Icons,
  Mobile,
  Slider,
  Tablet,
  Branding,
  AboutSite,
  Philosophy,
  OtherPages,
  LogoConcept,
  ColorsAndFonts
} from '../../src/Components/Sections/Projects/Attic'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
/* STYLES */
import '~/Styles/Pages/Projects/attic.scss'

const AtticStroy = () => {
  return (
    <MainWrapper id="attic-project-page">
      <Main/>
      <About/>
      <Philosophy/>
      <LogoConcept/>
      <ColorsAndFonts/>
      <Branding/>
      <Slider/>
      <AboutSite/>
      <OtherPages/>
      <Icons/>
      <Tablet/>
      <Mobile/>
    </MainWrapper>
  )
}

export default AtticStroy
