import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { AdaptationAboutInfo } from './Config'
/* IMAGES */
const ZlataPhone = '../../Assets/images/ZlataProject/ZlataPhone.png'
const ZlataDesktopXS = '../../Assets/images/ZlataProject/zlata_1_xs.png'
const ZlataDesktopXL = '../../Assets/images/ZlataProject/zlata_1_xl.png'

export const Mobile = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <SectionLayout id="zlata-mobile" wrap={false} Footer={() => <BottomNavigation/>}>
      <div className="mobile-adaptation">
        <Row className="mobile-adaptation-container">
          <Col xs={12} md={6}>
            <ImageWrapper isDot className="mobile-dots" display={!mobile} />
            <ImageWrapper src={ZlataPhone} className="mobile-phone" display={!mobile} />
          </Col>
          <Col xs={12} md={6}>
            <SectionTitle title="Mobile adaptation"/>
            <SectionDesc/>
            <ImageWrapper isDot className="mobile-dots" display={mobile} />
            <ImageWrapper src={ZlataPhone} className="mobile-phone" display={mobile} />
            <TypeSomething content={AdaptationAboutInfo}/>
          </Col>
        </Row>
      </div>
      <div className="about-tablet">
        <SectionTitle title="About tablet"/>
        <SectionDesc/>
        <ImageWrapper src={mobile ? ZlataDesktopXS : ZlataDesktopXL} className="devices-image-wrap" />
      </div>
    </SectionLayout>
  )
}
