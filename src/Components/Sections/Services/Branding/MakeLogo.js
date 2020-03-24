import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const LogoImage = '/Assets/Images/Services/Branding/MakeLogo.svg'

export const MakeLogo = () => {
  const isLaptop = useDeviceDetect(true)
  
  return (
    <SectionLayout id="branding-make-logo" Header={() => <ImageWrapper isDot display={!isLaptop} />}>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Как разрабатывается логотип" isContentWhite />
          <SectionDesc isContentWhite className="d-none d-lg-block"/>
          <div className="making-logo-wrap d-flex d-lg-none">
            <ImageWrapper src={LogoImage} className="logo-image" />
            <button className="custom-btn"><span>Создать логотип</span></button>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <SectionDesc isContentWhite className="d-block d-lg-none"/>
          <div className="making-logo-wrap d-none d-lg-flex">
            <ImageWrapper src={LogoImage} className="logo-image" />
            <button className="custom-btn"><span>Создать логотип</span></button>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
