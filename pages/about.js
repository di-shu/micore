import React from 'react'
import dynamic from 'next/dynamic'
import MainWrapper from '~/Components/SectionsComponents/MainWrapper'

const AboutPage = dynamic(() => import('~/Components/SitePages/AboutPage'))

export default () => (
  <MainWrapper id="about-page">
    <AboutPage />
  </MainWrapper>
)
