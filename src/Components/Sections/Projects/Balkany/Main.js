import React from 'react'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
const Ball = '/Assets/Images/Balkany/Ball.png'
const Pattern = '/Assets/Images/Balkany/DirtyPattern.png'

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
