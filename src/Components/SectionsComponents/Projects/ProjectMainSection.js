import React from 'react'
import { ScrollBox } from '../ScrollBox'
import { SeeMoreLink } from '../SeeMoreLink'
import { ImageWrapper } from '../ImageWrapper'
import { SectionLayout } from '../SectionLayout'
import { SectionDesc, SectionTitle } from '../SectionInfo'

export const ProjectMainSection = ({ id, name, background, content, isContentWhite, isNavBlack, children }) => {
  return (
    <SectionLayout
      id={`${id}-main`}
      Header={() => (
        <>
          {background && <ImageWrapper src={background} className="section-background" />}
          <SeeMoreLink label="Back to projects" className={isNavBlack ? 'is-black' : ''}/>
          <ScrollBox isBlack={isNavBlack} />
        </>
      )}
      Footer={content}
    >
      <SectionDesc isContentWhite={isContentWhite}>Project name</SectionDesc>
      <SectionTitle main title={name} isContentWhite={isContentWhite} />
      {children}
    </SectionLayout>
  )
}
