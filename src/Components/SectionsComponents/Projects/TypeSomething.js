import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const TypeSomething = ({ content, whiteText, size }) => {
  return (
    <Row className='about-projects-services'>
      {content && content.map((text, index) => (
        <Col key={index} xs={6} md={size}>
          <p className={`text-with-dot ${whiteText ? 'is-white' : ''}`}>{text}</p>
        </Col>
      ))}
    </Row>
  )
}
