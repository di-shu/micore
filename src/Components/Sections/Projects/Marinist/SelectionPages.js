import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Pages } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

export const SelectionPages = () => {
  return (
    <SectionLayout id="marinist-selection-pages">
      <SectionTitle title="Selection pages" />
      <Row>
        {Pages.map((page, index) => (
          <Col key={index} xs={12} className="col-selection-item">
            <Row>
              <Col xs={12} lg={7}>
                <ImageWrapper src={page.img} className="page-image" />
              </Col>
              <Col xs={12} lg={5} className="page-info">
                <h6 className="page-name">{page.name}</h6>
                <SectionDesc className="page-desc">{page.desc}</SectionDesc>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
