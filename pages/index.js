import React from 'react'
import dynamic from 'next/dynamic'
import MainWrapper from '~/Components/SectionsComponents/MainWrapper'

const HomePage = dynamic(() => import('~/Components/SitePages/HomePage'))

export default () => (
  <MainWrapper id="main-page">
    <HomePage />
  </MainWrapper>
)
