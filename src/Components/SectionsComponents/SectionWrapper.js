import React from 'react'
import Container from 'react-bootstrap/Container'

export const SectionWrapper = ({ children, noPadding, className }) => (
  <Container
    className={`section-wrapper${noPadding ? ' no-padding' : ''}${className ? ` ${className}` : ''}`}
    children={children}
  />
)
