import React, {useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'


export const SectionWrapper = ({ children, noPadding, className }) => {
  const elem = useRef(null)

    useEffect(() => {
        const wrap = elem.current.querySelector('.wh-wrap');
        const horizontal = elem.current.querySelector('.horizontal-scroll__container');
        if(wrap) {
            wrap.style.height = `${horizontal.clientWidth + horizontal.clientHeight - window.innerWidth}px`
        }

    }, [elem])

  return  (
      <Container
          ref={elem}
          className={`section-wrapper${noPadding ? ' no-padding' : ''}${className ? ` ${className}` : ''}`}
          children={children}
          onScroll={(e) => {
           elem.current.querySelector('.horizontal-scroll__container').style.transform = `translate3d(-${elem.current.scrollTop}px, 0, 0)`;
          }}
      />
  )
}
