import React from 'react'
import {
  About,
  DesignStory,
  Main,
  Results,
  Devices,
  HomePage, Last
} from '../../src/Components/Sections/Projects/BeeGames'
import { MainWrapper } from '../../src/Components/SectionsComponents'
/* STYLES */
import '~/Styles/Pages/Projects/bee-games.scss'

const BeeGames = () => {
  return (
    <MainWrapper id="bee-games-project-page">
      <Main/>
      <About/>
      <DesignStory/>
      <Results/>
      <Devices/>
      <HomePage/>
      <Last/>
    </MainWrapper>
  )
}

export default BeeGames
