import React from 'react'
import { FlipBook, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { MarinistLogobook } from './Config'

export const Logobook = () => {
  return (
    <SectionLayout id="marinist-logobook">
      <SectionTitle title="Logobook" />
      <SectionDesc />
      <FlipBook pages={MarinistLogobook} />
    </SectionLayout>
  )
}
