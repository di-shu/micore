import React from 'react'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
import { About, AboutName, Main, SimplyWords, Why } from '../../src/Components/Sections/Projects/Manticore'
/* STYLES */
import '~/Styles/Pages/Projects/manticore.scss'

const Manticore = () => {
  return (
    <MainWrapper id="manticore-project-page">
      <Main/>
      <About/>
      <Why/>
      <AboutName/>
      <SimplyWords/>
    </MainWrapper>
  )
}

export default Manticore
