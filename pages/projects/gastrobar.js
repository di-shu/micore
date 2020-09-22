import React from 'react'
import { MainWrapper } from '~/Components/SectionsComponents'
import { About, Branding, Colors, Idea, Identity, Main, Symbol } from '../../src/Components/Sections/Projects/Gastrobar'
/*STYLES*/
import '~/Styles/Pages/Projects/gastrobar.scss'

const Gastrobar = () => {
  return (
    <MainWrapper id="gastrobar-project-page">
      <Main/>
      <About/>
      <Idea/>
      <Colors/>
      <Branding/>
      <Identity/>
      <Symbol/>
    </MainWrapper>
  )
}

export default Gastrobar
