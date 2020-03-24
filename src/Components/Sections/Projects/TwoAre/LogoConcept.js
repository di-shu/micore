import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/*IMAGES*/
const LogoConceptImg = '/Assets/Images/TwoAre/LogoConcept.svg'

const SectionHeader = () => <ImageWrapper isDot />

export const LogoConcept = () => {
  return (
    <SectionLayout id="two-are-logo-concept" Header={SectionHeader}>
      <ImageWrapper src={LogoConceptImg} className="logo-concept" />
    </SectionLayout>
  )
}
