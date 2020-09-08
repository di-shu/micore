import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'

const Ball = '/images/Balkany/balkany_ball.png'
const Pattern = '/images/Balkany/balkany_back.jpg'

const SectionContent = () => (
  <>
    <ImageWrapper src={Pattern} className="pattern-bg"/>
    <div className="main-section-images">
      <div className="rectangle-image"/>
      <div className="border-image"/>
      <ImageWrapper src={Ball} className="ball-image" />
    </div>
  </>
)

export const Main = () => <ProjectMainSection id="balkany" name="FC Balkany" content={SectionContent} />
