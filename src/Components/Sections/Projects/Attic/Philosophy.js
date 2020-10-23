import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const PhilosophyImg = '/images/Attic/Philosophy.png'

export const Philosophy = () => {
  return (
    <SectionLayout
      id="attic-philosophy"
      Header={() => <ImageWrapper src={PhilosophyImg} className="philosophy-image"/>}
    >
      <SectionTitle title="Философия" isContentWhite/>
      <SectionDesc isContentWhite>
        Мы постарались найти верный образ, который максимально раскроет суть компании. Слон - это символ крепости,
        стабильности, уверенности и силы - очень важные качества для строительной компании.
      </SectionDesc>
    </SectionLayout>
  )
}
