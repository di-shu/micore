import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServicePriceMiscalculations = ({ priceDesc, stages, isPrice = true }) => {
  return (
    <SectionLayout id="service-price-miscalculation">
      {isPrice && (
        <Row className="price-wrap">
          <Col xs={12} lg={6}>
            <MyScrollAnimation delay={[0]}>
              <SectionTitle className="price-title" isContentWhite>
                Цены <span>или почему мы их не называем</span>
              </SectionTitle>
            </MyScrollAnimation>
          </Col>
          <Col xs={12} lg={6}>
            <MyScrollAnimation delay={[200]}>
              <SectionDesc isContentWhite className="price-desc" children={priceDesc}/>
            </MyScrollAnimation>
          </Col>
        </Row>
      )}
      <Row className="miscalculations-wrap">
        <Col xs={12}>
          <MyScrollAnimation delay={[400]}>
            <SectionTitle title="Этапы просчета" className="miscalculations-title" isContentWhite/>
          </MyScrollAnimation>
        </Col>
        <Col xs={12}>
          <Row>
            {stages && stages.map(({ title, desc }, index) => (
              <Col key={`stage_${index}`} className="col-stage" xs={12} md={6} lg={4}>
                <MyScrollAnimation delay={[600, 700]}>
                  <SectionTitle className="stage-title" isContentWhite>
                    <span>{index + 1}</span> {title}
                  </SectionTitle>
                  <SectionDesc children={desc} isContentWhite className="stage-desc"/>
                </MyScrollAnimation>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
