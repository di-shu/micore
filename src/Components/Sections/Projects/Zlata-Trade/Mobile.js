import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const ZlataPhone = '../../images/ZlataProject/ZlataPhone.png'
const ZlataTablet = '../../images/ZlataProject/ZlataTablet.png'

export const Mobile = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <SectionLayout id="zlata-mobile" wrap={false} Footer={() => <BottomNavigation link="zlata-trade.com"/>}>
      <div className="mobile-adaptation">
        <Row className="mobile-adaptation-container">
          <Col xs={12} md={6}>
            <ImageWrapper isDot className="mobile-dots" display={!mobile}/>
            <ImageWrapper src={ZlataPhone} className="mobile-phone" display={!mobile}/>
          </Col>
          <Col xs={12} md={6}>
            <SectionTitle title="Мобильная версия"/>
            <SectionDesc>
              Под телефоны мы нарисовали не адаптацию десктопа, а отдельно полноценную версию со своей проработкой
              взаимодействия и уникальным опытом для пользователя
            </SectionDesc>
            <ImageWrapper isDot className="mobile-dots" display={mobile}/>
            <ImageWrapper src={ZlataPhone} className="mobile-phone" display={mobile}/>
          </Col>
        </Row>
      </div>
      <div className="about-tablet">
        <SectionTitle title="Новости"/>
        <SectionDesc>
          Постоянно обновляющийся новостной блог позволяет пользователям возвращаться на сайт для получения полезного
          контента. Компания рассказывает как и о своих новостях, так и о новостях индустрии в принципе
        </SectionDesc>
        <ImageWrapper src={ZlataTablet} className="devices-image-wrap"/>
      </div>
    </SectionLayout>
  )
}
