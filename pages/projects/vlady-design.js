import React from 'react'
import { MainWrapper } from '../../src/Components'
import { About, DesignStory, HomePage, Main } from '../../src/Components/Sections/Projects/VladyDesign'
import '../../src/Styles/Pages/Projects/vlady-design.scss'

const VladyDesign = () => {
  return (
    <MainWrapper id="vlady-project-page">
      <Main/>
      <About/>
      <DesignStory/>
      <HomePage/>
    </MainWrapper>
  )
}

export default VladyDesign
