import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'
import '~/Styles/Sections/Services/service-price-miscalculations.scss'

export const ServicePriceMiscalculations = ({ priceDesc, stages, isPrice = true }) => {
  return (
    <SectionLayout id="service-price-miscalculation" Header={() => <ImageWrapper isDot />}>
      {isPrice && (
        <Row className="price-wrap">
          <Col xs={12} lg={6}>
            <SectionTitle title="Цены" className="price-title" isContentWhite />
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
                <SectionTitle title={<><span>{index + 1}</span> {title}</>} className="stage-title" isContentWhite />
                <SectionDesc children={desc} isContentWhite className="stage-desc" />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
