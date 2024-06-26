import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BottomNavigation, ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const iPhoneX = '/images/Marinist/iPhoneX.png'
const WavesPattern = '/images/Marinist/WavesPattern.png'

const SectionHeader = () => <ImageWrapper src={WavesPattern} className="waves-pattern"/>
const SectionFooter = () => <BottomNavigation/>

export const Mobile = () => {
  return (
    <SectionLayout id="marinist-mobile" Header={SectionHeader} Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Адаптация"/>
          <SectionDesc>
            Мы не забыли за адаптивную вёрстку сайта под разные гаджеты, ведь по статистике более 50% пользователей
            заходят с телефона. Мы отрисовали уникальные макеты от версии на компьютер, чтобы достичь максимального
            удобства с телефонов и планшетов.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={iPhoneX} className="iPhoneX-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
