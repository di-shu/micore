import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ProjectColor,
  SectionLayout, FontExample, ImageWrapper
} from '../../../SectionsComponents'
import { MarinistColors, MarinistFonts } from './Config'

export const Colors = () => {
  return (
    <SectionLayout id="marinist-colors" Header={() => <ImageWrapper isDot/>}>
      <SectionTitle title="Цвета и шрифты"/>
      <Row className="row-color-wrap">
        <Col xs={12} lg={7}>
          <SectionDesc>
            Цветовое палитра представлена тремя цветами: лазурный бирюзовый - цвет морской волны, темно-коричневый -
            выделяет шрифтовую часть, изумрудный морской - используется в качестве фона.
          </SectionDesc>
          <ProjectColor colors={MarinistColors}/>
        </Col>
        <Col xs={12} lg={5}>
          <FontExample fonts={MarinistFonts}/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
