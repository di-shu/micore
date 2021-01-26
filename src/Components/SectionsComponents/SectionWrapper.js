import React, {useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'


export const SectionWrapper = ({ children, noPadding, className }) => {
  return  (
      <Container
          className={`section-wrapper${noPadding ? ' no-padding' : ''}${className ? ` ${className}` : ''}`}
          children={children}
      />
  )
}
