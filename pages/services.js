import React from 'react'
import dynamic from 'next/dynamic'
import MainWrapper from '~/Components/SectionsComponents/MainWrapper'

const ServicesPage = dynamic(() => import('~/Components/SitePages/ServicesPage'))

export default () => (
  <MainWrapper id="services-page">
    <ServicesPage/>
  </MainWrapper>
)
