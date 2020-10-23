import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { BrandingContent } from './Config'
/*IMAGES*/
const BodyImg = '/images/VipYoga/Body.png'

export const Branding = () => {
  return (
    <SectionLayout id="vip-yoga-branding" Header={() => <ImageWrapper src={BodyImg} className="body-image"/>}>
      <Row>
        <Col xs={12} lg={5}>
          <SectionTitle title="Брендирование" isContentWhite/>
          <SectionDesc isContentWhite>
            Формат логотипа хорошо подходит для создания рекламных материалов любого рода: банера для сайта, рекламы в
            соцсетях, печатной продукции (флаера, постеры, буклеты, билборды). Логотип вписанный в пластичные асаны
            создает эффект 3D.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
