import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
  Last,
  Main,
  About,
  Results,
  Devices,
  HomePage,
  DesignStory
} from '../../src/Components/Sections/Projects/BeeGames'
import '../../src/Styles/Pages/Projects/bee-games.scss'

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
