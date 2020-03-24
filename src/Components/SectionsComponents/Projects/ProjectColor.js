import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper } from '../ImageWrapper'

const GetCountAffix = (count) => {
  switch (count + 1) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default: return 'th'
  }
}

export const ProjectColor = ({ colors }) => {
  return (
    <Row className="colors-row">
      {colors && colors.map((color, index) => (
        <Col key={index} xs={12} lg={color.size ? color.size : 4} className="col-item-color">
          <div className="color-info-wrap">
            {color.image ? (
              <ImageWrapper src={color.image} className="color-image" />
            ) : (
              <div className={`color-wrap ${color.name}`} style={{ background: color.background || color.hex }}>
                <p className="color-text" style={{ color: color.textColor }}>{index + 1}{GetCountAffix(index)}</p>
              </div>
            )}
            <div className="info-wrap">
              <p className="info-text">{color.colorName}</p>
              <p className="info-text">{color.hex}</p>
              <p className="info-text">{color.CMYK}</p>
              <p className="info-text">{color.fullName}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}
