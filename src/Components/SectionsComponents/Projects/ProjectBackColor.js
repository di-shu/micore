import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const ProjectBackColor = ({ colors }) => {
  return (
    <Row className="back-colors-row">
      {colors && colors.map((color, index) => (
        <Col key={index} xs={color.size ? color.size : 3} className="col-item-back-color">
          <div className="back-color-info-wrap">
              <div className={`back-color-wrap ${color.name}`} style={{ background: color.background }}></div>
          </div>
        </Col>
      ))}
    </Row>
  )
}
