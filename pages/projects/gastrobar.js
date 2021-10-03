import React from 'react'
import { MainWrapper } from '../../src/Components'
import { About, Branding, Colors, Idea, Identity, Main, Symbol } from '../../src/Components/Sections/Projects/Gastrobar'
import '../../src/Styles/Pages/Projects/gastrobar.scss'

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
