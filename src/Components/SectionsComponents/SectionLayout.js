import React from 'react'
import { SectionWrapper } from './SectionWrapper'

export const SectionLayout = (props) => {
  const { id, wrap = true, Header, Footer, children, className, sectionClassName, customWrap = false } = props
  
  return (
    <section id={id} className={`project-section ${sectionClassName ? sectionClassName : ''}`}>
      {Header && <Header />}
      {children && (
        customWrap ? (
          children
        ) : wrap ? (
          <SectionWrapper className={className ? className : ''}>
            {children}
          </SectionWrapper>
        ) : (
          children.map((Child, index) => (
            <SectionWrapper key={index} className={Child.props.className}>
              {Child}
            </SectionWrapper>
          ))
        )
      )}
      {Footer && <Footer />}
    </section>
  )
}
