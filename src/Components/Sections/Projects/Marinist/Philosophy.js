import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const Water = '/images/Marinist/Water.png'
const LogoMinimized = '/images/Marinist/LogoMinimized.svg'

export const Philosophy = () => {
  return (
    <SectionLayout id="marinist-philosophy">
      <Row>
        <Col xs={12} lg={8} className="philosophy-info-wrap">
          <SectionTitle title="Философия"/>
          <SectionDesc>
            Слоган “вдохновленный морем” раскрывает суть философии жилого комплекса: комфортная жизнь в гармонии с собой
            и природой, вдохновляющая на творчество. Статичный шрифт названия и рамки, вырастающие из букв, напоминают
            конструкцию или фундамент дома, отражают стабильность и надежность. В тоже время, динамичная, яркая волна
            символизирует свободу, легкость и созидание. Обволакивая “конструкцию” она словно защищает от городской
            суеты.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={4} className="philosophy-logo-wrap">
          <ImageWrapper src={Water} className="water-image"/>
          <ImageWrapper src={LogoMinimized} className="logo-image"/>
          <SectionTitle title="Адаптация"/>
          <SectionDesc>
            Минимизированная версия логотипа, адаптированная под отдельный символ
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
