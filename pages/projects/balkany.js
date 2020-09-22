import React from 'react'
import {
  About,
  AboutSite,
  Branding,
  Desktop,
  Fan,
  LogoDesign,
  Main,
  News,
  Results,
  Tablet
} from '../../src/Components/Sections/Projects/Balkany'
import { MainWrapper } from '~/Components/SectionsComponents'
/*STYLES*/
import '~/Styles/Pages/Projects/fc-balkany.scss'

export default () => {
  return (
    <MainWrapper id="balkany-project-page">
      <Main/>
      <About/>
      <LogoDesign/>
      <Results/>
      <Branding/>
      <Fan/>
      <Branding isSecond={true}/>
      <AboutSite/>
      <News/>
      <Desktop/>
      <Tablet/>
    </MainWrapper>
  )
}
