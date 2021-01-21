import React, {useEffect, useRef, useState} from 'react'
import { SectionWrapper } from './SectionWrapper'
import { MyScrollAnimation } from './MyScrollAnimation'

export const SectionLayout = (props) => {
  const { id, wrap = true, Header, Footer, children, className, sectionClassName, customWrap = false } = props


  return (
    <section id={id}  className={`project-section ${sectionClassName ? sectionClassName : ''}`}>
      <MyScrollAnimation animationName="fadeIn" offset={id.includes('-main') ? 0 : 300}>
        <div className={`project-section__container ${sectionClassName ? sectionClassName+ '__container': ''}`}>
          {Header && <Header />}
          {children && (
            customWrap ? (
              children
            ) : wrap ? (
              <SectionWrapper className={`${className ? className : ''}`}>
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
        </div>
      </MyScrollAnimation>
    </section>
  )
}
