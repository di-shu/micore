import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
  News,
  Logo,
  Main,
  About,
  Brief,
  Icons,
  Other,
  Mobile,
  Branding,
  HomePage,
  AboutSite,
  ColorsAndFonts
} from '../../src/Components/Sections/Projects/Bessarabskiy'
import '../../src/Styles/Pages/Projects/bessarabskiy.scss'

const Bessarabskiy = () => (
  <MainWrapper id="bessarabskiy-project-page">
    <Main/>
    <About/>
    <Brief/>
    <Logo/>
    <ColorsAndFonts/>
    {/*<Branding/>*/}
    {/*<Other/>*/}
    <AboutSite/>
    <HomePage/>
    <News/>
    <Icons/>
    <Mobile/>
  </MainWrapper>
)

export default Bessarabskiy
