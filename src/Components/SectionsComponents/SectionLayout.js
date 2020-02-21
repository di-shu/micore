import React from 'react'
import { SectionWrapper } from './SectionWrapper'

export const SectionLayout = (props) => {
  const { id, wrap = true, Header, Footer, children, className, sectionClassName } = props
  
  return (
    <section id={id} className={`project-section${sectionClassName ? ` ${sectionClassName}` : ''}`}>
      {Header && <Header />}
      {children && (
        wrap ? (
          <SectionWrapper className={className ? className : ''}>
            {children}
          </SectionWrapper>
        ) : (
          children.map((Child, index) => (
            <SectionWrapper key={index} className={className ? className[index] : ''}>
              {Child}
            </SectionWrapper>
          ))
        )
      )}
      {Footer && <Footer />}
    </section>
  )
}
