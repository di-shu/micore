import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BessarabskiyIcons } from './Config'
import { SectionDesc, ImageWrapper, SectionTitle, SectionLayout } from '../../../../Components'

export const Icons = () => (
  <SectionLayout id="bessarabskiy-icons">
    <SectionTitle title="Иконки"/>
    <SectionDesc>
      Детали имеют важное значение. Все иконки на сайте адаптированы или вручную отрисованы дизайнером специально для
      этого проекта.
    </SectionDesc>
    <Row className="grid-container-icons">
      {BessarabskiyIcons.map((icon, index) => (
        <Col key={index} xs={4} lg={2} className="grid-item-icons">
          <ImageWrapper src={icon}/>
        </Col>
      ))}
    </Row>
  </SectionLayout>
)
