import React, {useEffect, useRef, useState} from 'react'
import { SectionWrapper } from './SectionWrapper'
import { MyScrollAnimation } from './MyScrollAnimation'

export const SectionLayout = (props) => {
  const { id, wrap = true, Header, Footer, children, className, sectionClassName, Glitch, customWrap = false } = props
    const [scrolled, setScrolled] = useState(true)
    const wrapper = useRef(null);

    const handleScroll = () => {
        if(wrapper.current) {
            const elem = wrapper.current;
            if(window.scrollY > elem.getBoundingClientRect().height + 50) {
                setScrolled(false)
            } else if(window.scrollY < elem.getBoundingClientRect().height + 50) {
                setScrolled(true)
            }
        }
    }

    useEffect(() => {
        if(Glitch) {
            document.addEventListener('scroll', handleScroll)
        }
    }, [])


  return (
    <section ref={wrapper} id={id}  className={`project-section ${sectionClassName ? sectionClassName : ''}`}>
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
            {Glitch && scrolled ? <Glitch/> : ''}
        </div>
      </MyScrollAnimation>
    </section>
  )
}
