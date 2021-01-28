import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const Leaf = '/images/Bessarabskiy/Leaf.png'
const Barrel = '/images/Bessarabskiy/Barrel.png'
const LogoVar1 = '/images/Bessarabskiy/logo2.jpg'
const LogoVar2 = '/images/Bessarabskiy/logo1.jpg'

export const Brief = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-brief">
      <Row>
        <Col xs={12} lg={7} className="brief-grid-item">
          <SectionTitle title="Смысл лого"/>
          <SectionDesc className="main-desc">
            Ресторан умело сочетает традиционные местные бессарабские мотивы в кухне и интерьере заведения.
            Эту идею мы перенесли в визуальный образ бренда.
          </SectionDesc>
          {minWidthLaptop && (
            <Row className="logo-var-container">
              <Col lg={6} className="logo-brief-wrap">
                <SectionTitle title="Первичная версия" className="version-title"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar1}/>
                </div>
              </Col>
              <Col lg={6} className="logo-brief-wrap">
                <SectionTitle title="Результат" className="version-title"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar2}/>
                </div>
              </Col>
            </Row>
          )}
        </Col>
        <Col xs={12} lg={5} className="brief-grid-item">
          <SectionTitle title="Идея" className="version-title"/>
          <SectionDesc className="version-desc">
            Бессарабия - край виноделов. Поэтому основными символами логотипа заведения стали виноградные гроздья и
            винная бочка.
          </SectionDesc>
          <div className="brief-images-wrap">
            <div className="brief-row-wrap barrel-wrap">
              <ImageWrapper src={Barrel} className="barrel-image"/>
            </div>
            <div className="brief-row-wrap grape-wrap">
              <ImageWrapper src={Leaf} className="grape-image"/>
            </div>
          </div>
        </Col>
        {!minWidthLaptop && (
          <Col xs={12} lg={6} className="logo-wrapper">
            <Row>
              <Col xs={12} className="logo-brief-wrap">
                <SectionTitle title="Первичная версия" className="version-title"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar1}/>
                </div>
              </Col>
              <Col xs={12} className="logo-brief-wrap">
                <SectionTitle title="Результат" className="version-title"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar2}/>
                </div>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
