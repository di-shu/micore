import React from 'react'
import { MainWrapper } from '~/Components/SectionsComponents'
import { HomePortfolio } from '~/Components/Sections/HomePage'
import { FooterSection } from '~/Components/Sections'

const Portfolio = () => (
  <MainWrapper id="portfolio-page">
    <HomePortfolio animation isPortfolio/>
  </MainWrapper>
)

export default Portfolio
