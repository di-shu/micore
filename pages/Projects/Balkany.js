import React from 'react'
import {
  About,
  AboutSite,
  Adaptation,
  Branding,
  Desktop,
  Fan,
  LogoConcept,
  LogoDesign,
  Main,
  News,
  Results,
  Tablet
} from '../../src/Components/Sections/Projects/Balkany'
import { MainWrapper } from '../../src/Components/SectionsComponents'
/*STYLES*/
import '~/Styles/Pages/Projects/fc-balkany.scss'

const Balkany = () => {
  return (
    <MainWrapper id="balkany-project-page">
      <Main/>
      <About/>
      <LogoDesign/>
      <LogoConcept/>
      <Results/>
      <Branding/>
      <Fan/>
      <Branding isSecond={true}/>
      <AboutSite/>
      <News/>
      <Desktop/>
      <Adaptation/>
      <Tablet/>
    </MainWrapper>
  )
}

export default Balkany
