import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import parse from 'html-react-parser'
import useTranslation from 'next-translate/useTranslation'
import { MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServicePriceMiscalculations = ({ stages, isPrice = true }) => {
  const { t } = useTranslation('services')

  return (
    <SectionLayout id="service-price-miscalculation">
      {isPrice && (
        <Row className="price-wrap">
          <Col xs={12} lg={6}>
            <MyScrollAnimation delay={[0]}>
              <SectionTitle className="price-title" isContentWhite children={parse(t('price_title'))}/>
            </MyScrollAnimation>
          </Col>
          <Col xs={12} lg={6}>
            <MyScrollAnimation delay={[200]}>
              <SectionDesc
                isContentWhite
                className="price-desc"
                children={t('price_subtitle')}
              />
            </MyScrollAnimation>
          </Col>
        </Row>
      )}
      <Row className="miscalculations-wrap">
        <Col xs={12}>
          <MyScrollAnimation delay={[400]}>
            <SectionTitle title={t('miscalculations_title')} className="miscalculations-title" isContentWhite/>
          </MyScrollAnimation>
        </Col>
        <Col xs={12}>
          <Row>
            {stages && stages.map(({ title, description }, index) => (
              <Col key={`stage_${index}`} className="col-stage" xs={12} md={6} lg={4}>
                <MyScrollAnimation delay={[600, 700]}>
                  <SectionTitle className="stage-title" isContentWhite>
                    <span>{index + 1}</span> {title}
                  </SectionTitle>
                  <SectionDesc children={description} isContentWhite className="stage-desc"/>
                </MyScrollAnimation>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
