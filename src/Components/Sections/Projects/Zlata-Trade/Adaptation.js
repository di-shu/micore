import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AdaptationFooter, AdaptationHeader } from './Config'
import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const LogoSizes = '../../images/ZlataProject/LogoSizes.png'

export const Adaptation = () => {
  return (
    <SectionLayout
      id="zlata-adaptation"
      Header={AdaptationHeader}
      Footer={AdaptationFooter}
    >
      <SectionTitle title="Адаптация"/>
      <Row className="grid-container-adaptation">
        <Col xs={12} md={6}>
          <SectionDesc>
            У компании необычное и легко запоминающееся название. Это обстоятельство подтолкнуло нас создать также
            адаптированную текстовую версию логотипа. Крупный строгий шрифт основной части названия подчеркивает
            весомость компании на рынке.
          </SectionDesc>
        </Col>
        <Col xs={12} md={6}>
          <div className="image-wrap logo-count">
            <img src={LogoSizes} alt="Logo"/>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
