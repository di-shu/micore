import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'

const LogoDesign = '/images/PrideLogistic/pridelog_logo.svg'

export const LogoStory = () => {
  const { mobile, tablet, laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-logo-story">
      <Row>
        <Col xs={12} lg={6}>
          <ImageWrapper src={LogoDesign} display={mobile || tablet}/>
          <SectionTitle title="Смысл"/>
          <SectionDesc>
            Креативным решение при разработке логотипа стала динамическая конструкция построена на взаимодействии шрифта
            и символа. Лев в прыжке раскрывает философию и специфику деятельности компании, символизирует надежность,
            скорость и результат. Округлый, ровный шрифт подчеркивает динамичность композиции.
          </SectionDesc>
        </Col>
        {(laptop || desktop) && (
          <Col lg={6}>
            <ImageWrapper src={LogoDesign}/>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
