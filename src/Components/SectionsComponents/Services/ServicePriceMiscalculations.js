import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServicePriceMiscalculations = ({ priceDesc, stages, isPrice = true }) => {
  return (
    <SectionLayout id="service-price-miscalculation">
      {isPrice && (
        <Row className="price-wrap">
          <Col xs={12} lg={6}>
            <SectionTitle className="price-title" isContentWhite>
              Цены <span>или почему мы их не называем</span>
            </SectionTitle>
          </Col>
          <Col xs={12} lg={6}>
            <SectionDesc isContentWhite className="price-desc" children={priceDesc} />
          </Col>
        </Row>
      )}
      <Row className="miscalculations-wrap">
        <Col xs={12}>
          <SectionTitle title="Этапы просчета" className="miscalculations-title" isContentWhite />
        </Col>
        <Col xs={12}>
          <Row>
            {stages && stages.map(({ title, desc }, index) => (
              <Col key={`stage_${index}`} className="col-stage" xs={12} md={6} lg={4}>
                <SectionTitle className="stage-title" isContentWhite>
                  <span>{index + 1}</span> {title}
                </SectionTitle>
                <SectionDesc children={desc} isContentWhite className="stage-desc" />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
