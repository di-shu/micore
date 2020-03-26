import React from 'react'
import {
  About,
  Adaptation,
  Branding,
  Brief,
  Desktop,
  Main,
  Mobile,
  Results
} from '../../src/Components/Sections/Projects/Zlata-Trade'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
/*STYLES*/
import '~/Styles/Pages/Projects/zlata-trade.scss'

const ZlataTrade = () => {
  return (
    <MainWrapper id="zlata-project-page">
      <Main/>
      <About/>
      <Brief/>
      <Results/>
      <Adaptation/>
      <Branding />
      <Desktop/>
      <Mobile/>
    </MainWrapper>
  )
}

export default ZlataTrade
