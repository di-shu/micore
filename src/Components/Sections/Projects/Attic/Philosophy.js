import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const PhilosophyImg = '/images/Attic/Philosophy.png'

export const Philosophy = () => {
  return (
    <SectionLayout id="attic-philosophy" Header={() => <ImageWrapper src={PhilosophyImg} className="philosophy-image" /> }>
      <SectionTitle title="Philosophy" isContentWhite />
      <SectionDesc isContentWhite />
    </SectionLayout>
  )
}
