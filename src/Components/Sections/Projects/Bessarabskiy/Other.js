import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  ProjectInfoWrap
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/*IMAGES*/
const Napkins = '/images/Bessarabkiy/BessarabskiyNapkins.png'

export const Other = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-other" Footer={() => <ImageWrapper src={Napkins}/>}>
      <ImageWrapper isDot display={minWidthLaptop}/>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Другие атрибуты"/>
          <SectionDesc>
            Все внутренние и внешние ресторанные атрибуты, будь то меню, визитки, сертификаты, или даже обычные салфетки
            брендированы. Эстетичная и органичная брендовая продукция обеспечивает визуальную коммуникацию заведения с
            гостями.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
