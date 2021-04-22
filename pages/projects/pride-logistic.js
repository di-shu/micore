import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
  About,
  Brandbook,
  LogoApplication,
  LogoStory,
  LogoVariations,
  Main,
  Results,
  Services
} from '../../src/Components/Sections/Projects/PrideLogistic'
import '../../src/Styles/Pages/Projects/pride-logistic.scss'

export default () => {
  return (
    <MainWrapper id="pride-logistic-project-page">
      <Main/>
      <About/>
      <LogoStory/>
      <LogoVariations/>
      <Results/>
      <LogoApplication/>
      <Brandbook/>
      <Services/>
    </MainWrapper>
  )
}
