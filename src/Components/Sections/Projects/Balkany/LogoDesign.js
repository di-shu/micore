import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'

const LogoStory = '/images/Balkany/balkany_logo.svg'

export const LogoDesign = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="balkany-logo-design" Footer={() => <SectionLine direction="bottom"/>}>
      <ImageWrapper isDot display={desktop}/>
      <SectionTitle title="Смысл"/>
      <Row style={{ flexDirection: 'row-reverse' }}>
        <Col xs={12} md={6} className="grid-item">
          <ImageWrapper src={LogoStory}/>
        </Col>
        <Col xs={12} md={6} className="grid-item">
          <SectionDesc>
            Преданность традициям, семье и современным тенденциям в футболе - ценности футбольного клуба “Балканы”.
            Именно они отражены в новом логотипе команды. Наклон логотипа символизирует движение вперед, рвение
            достигать новых побед. Важным для клуба является место его рождения - село Заря Одесской области, которое
            заложено в очертании первой буквы.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
