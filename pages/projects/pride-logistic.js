import React from 'react'
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
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
/*STYLES*/
import '~/Styles/Pages/Projects/pride-logistic.scss'

const PrideLogistic = () => {
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

export default PrideLogistic
