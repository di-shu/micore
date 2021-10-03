import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
  About,
  AboutSection,
  Bottom,
  Branding,
  ColorsAndFonts,
  Main,
  Philosophy
} from '../../src/Components/Sections/Projects/VipYoga'
/*STYLES*/
import '../../src/Styles/Pages/Projects/vip-yoga.scss'

const VipYoga = () => {
  return (
    <MainWrapper id="vip-yoga-project-page">
      <Main/>
      <AboutSection/>
      <Philosophy/>
      <About/>
      <ColorsAndFonts/>
      <Branding/>
      <Bottom/>
    </MainWrapper>
  )
}

export default VipYoga
