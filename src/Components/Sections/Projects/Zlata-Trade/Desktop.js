import React from 'react'
import Row from 'react-bootstrap/Row'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
import { IconAdaptation, IconList } from './Config'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const ZlataDesktopXS = '../../Assets/images/ZlataProject/zlata_1_xs.png'
const ZlataDesktopXL = '../../Assets/images/ZlataProject/zlata_1_xl.png'

export const Desktop = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="zlata-desktop" wrap={false}>
      <div className="about-site">
        <SectionTitle title="About site"/>
        <SectionDesc withDot/>
        <ImageWrapper src={!desktop ? ZlataDesktopXS : ZlataDesktopXL} className="devices-image-wrap" />
      </div>
      <div className="adaptation">
        <SectionTitle title="Adaptation"/>
        <SectionDesc/>
        <Row>
          {IconList.map((icon, index) => (
            <IconAdaptation key={`icon_${index}`} img={icon.img} name={icon.name} />
          ))}
        </Row>
      </div>
      <div className="about-desktop">
        <SectionTitle title="About desktop"/>
        <SectionDesc withDot/>
        <ImageWrapper src={!desktop ? ZlataDesktopXS : ZlataDesktopXL} className="devices-image-wrap" />
      </div>
    </SectionLayout>
  )
}
