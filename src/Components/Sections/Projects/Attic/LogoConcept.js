import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const LogoConceptImage = '/images/Attic/LogoConcept.svg'

export const LogoConcept = () => {
  return (
    <SectionLayout id="attic-logo-concept">
      <ImageWrapper src={LogoConceptImage} className="logo-concept-image" />
    </SectionLayout>
  )
}
