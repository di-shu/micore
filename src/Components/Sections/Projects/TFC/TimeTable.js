import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const TimeTableImg = '/images/TFC/timetable-device.png'

export const TimeTable = () => {
  return (
    <SectionLayout id="tfc-timetable" Footer={() => <ImageWrapper src={TimeTableImg} className="timetable-image"/>}>
      <Row>
        <Col xs={12} md={6}>
            <SectionTitle title="Расписание"/>
          <SectionDesc>
            Цветовое палитра представлена тремя цветами: лазурный бирюзовый - цвет морской волны, темно-коричневый - выделяет шрифтовую часть, изумрудный морской - используется в качестве фона.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
