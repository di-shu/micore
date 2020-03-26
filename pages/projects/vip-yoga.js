import React from 'react'
import {
  About,
  AboutSection,
  Bottom,
  Branding,
  ColorsAndFonts,
  Main,
  Philosophy
} from '../../src/Components/Sections/Projects/VipYoga'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
/*STYLES*/
import '~/Styles/Pages/Projects/vip-yoga.scss'

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
