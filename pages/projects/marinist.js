import React from 'react'
import {
  Main,
  Logo,
  Menu,
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
import { MainWrapper } from '~/Components/SectionsComponents'
/*STYLES*/
import '~/Styles/Pages/Projects/marinist.scss'

const Marinist = () => {
  return (
    <MainWrapper id="marinist-project-page">
      <Main/>
      <About/>
      <Logo/>
      <Philosophy/>
      <Colors/>
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
