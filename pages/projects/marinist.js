import React from 'react'
import {
  Main,
  Logo,
  Menu,
  Fonts,
  About,
  Colors,
  Mobile,
  Branding,
  Logobook,
  AboutSite,
  Philosophy,
  OtherPages,
  Adaptation,
  SelectionPages
} from '../../src/Components/Sections/Projects/Marinist'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
/*STYLES*/
import '~/Styles/Pages/Projects/marinist.scss'

const Marinist = () => {
  return (
    <MainWrapper id="marinist-project-page">
      <Main />
      <About/>
      <Philosophy/>
      <Logo />
      <Colors/>
      <Fonts />
      <Branding/>
      <Logobook/>
      <AboutSite/>
      <SelectionPages/>
      <Menu/>
      <OtherPages/>
      <Adaptation/>
      <Mobile/>
    </MainWrapper>
  )
}

export default Marinist
