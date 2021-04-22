import React from 'react'
import { MainWrapper } from '../../src/Components'
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
import '../../src/Styles/Pages/Projects/zlata-trade.scss'

const ZlataTrade = () => {
  return (
    <MainWrapper id="zlata-project-page">
      <Main/>
      <About/>
      <Brief/>
      <Results/>
      {/*<Adaptation/>*/}
      <Branding />
      {/*<Desktop/>*/}
      <Mobile/>
    </MainWrapper>
  )
}

export default ZlataTrade
