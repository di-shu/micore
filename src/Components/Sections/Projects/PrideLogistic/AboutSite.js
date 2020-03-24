import React from 'react'
import { AboutSiteHeaderContent, AboutSiteBottomContent } from './Config'
import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

export const AboutSite = () => {
  return (
    <SectionLayout id="pride-about-site" Header={AboutSiteHeaderContent} Footer={AboutSiteBottomContent}>
      <SectionTitle title="About site"/>
      <SectionDesc withDot/>
    </SectionLayout>
  )
}
