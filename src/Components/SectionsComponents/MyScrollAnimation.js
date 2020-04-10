import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const MyScrollAnimation = ({ animationName = 'fadeInUp', delay = [0], offset = 0, children }) => {
  return children.length > 1 ? (
    children.map((el, index) => (
      <ScrollAnimation key={`animation_${index}`} animateIn={animationName} duration={1} delay={delay[index]} animateOnce={true} offset={offset}>
        {el}
      </ScrollAnimation>
    ))
  ) : (
    <ScrollAnimation animateIn={animationName} duration={1} delay={delay[0]} animateOnce={true} offset={offset}>
      {children}
    </ScrollAnimation>
  )
}
