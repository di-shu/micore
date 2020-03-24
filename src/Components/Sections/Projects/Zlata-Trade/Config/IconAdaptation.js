import React from 'react'
import Col from 'react-bootstrap/Col'
import { ImageWrapper } from '../../../../SectionsComponents'

export const IconAdaptation = ({ img, name }) => (
  <Col xs={6} md={3} className="grid-item-adaptation">
    <ImageWrapper src={img} className="icon-wrap" />
    <h5 className="icon-name">{name}</h5>
  </Col>
)
