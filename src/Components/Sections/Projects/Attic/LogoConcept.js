import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const LogoConceptImage = '/Assets/Images/Attic/LogoConcept.svg'

export const LogoConcept = () => {
  return (
    <SectionLayout id="attic-logo-concept">
      <ImageWrapper src={LogoConceptImage} className="logo-concept-image" />
    </SectionLayout>
  )
}
