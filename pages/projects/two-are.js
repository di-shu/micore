import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
  About,
  AboutDuet,
  Adaptation,
  Bottom,
  Branding,
  LogoConcept,
  Main,
  Philosophy
} from '../../src/Components/Sections/Projects/TwoAre'
import '../../src/Styles/Pages/Projects/two-are.scss'

const TwoAre = () => {
  return (
    <MainWrapper id="two-are-project-page">
      <Main/>
      <About/>
      <Philosophy/>
      <LogoConcept/>
      <AboutDuet/>
      <Branding/>
      <Adaptation/>
      <Bottom/>
    </MainWrapper>
  )
}

export default TwoAre
