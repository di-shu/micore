import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
import { AtticPages } from './Config'

export const OtherPages = () => {
  return (
    <SectionLayout id="attic-other-pages">
      <ImageWrapper isDot />
      <SectionTitle title="Other pages" />
      <Row>
        {AtticPages.map((page, index) => (
          <Col xs={12} key={index} className="col-wrap-info">
            <Row className={index % 2 !== 0 ? 'row-even' : ''}>
              <Col xs={12} lg={4} className="col-page-info">
                <SectionTitle className="page-title" title={page.title} />
                <SectionDesc className="page-desc" children={page.desc} />
              </Col>
              <Col xs={12} lg={8}>
                <ImageWrapper src={page.image} className="page-image" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
