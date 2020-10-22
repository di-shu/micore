import React from 'react'
import { ScrollBox } from '../ScrollBox'
import { SeeMoreLink } from '../SeeMoreLink'
import { ImageWrapper } from '../ImageWrapper'
import { SectionLayout } from '../SectionLayout'
import { SectionDesc, SectionTitle } from '../SectionInfo'
import { MyScrollAnimation } from '../MyScrollAnimation'

export const ProjectMainSection = ({ id, name, background, content, isContentWhite, isNavBlack, children }) => {
  return (
    <SectionLayout
      id={`${id}-main`}
      Header={() => (
        <>
          {background && <ImageWrapper src={background} className="section-background" />}
          <SeeMoreLink label="Назад к проектам" className={isNavBlack ? 'is-black' : ''}/>
          <ScrollBox isBlack={isNavBlack} />
        </>
      )}
      Footer={content}
    >
      <SectionDesc isContentWhite={isContentWhite}>Название проекта</SectionDesc>
      <SectionTitle main title={name} isContentWhite={isContentWhite} />
      {children}
    </SectionLayout>
  )
}
