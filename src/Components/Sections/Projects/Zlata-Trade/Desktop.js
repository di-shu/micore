import React from 'react'
import Row from 'react-bootstrap/Row'
import { IconAdaptation, IconList } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const ZlataSite = '../../images/ZlataProject/Imacbookphone.jpg'
const ZlataDesktopDevices = '../../images/ZlataProject/ZlataDesktop.jpg'

export const Desktop = () => {
  return (
    <SectionLayout id="zlata-desktop" wrap={false}>
      <div className="about-site">
        <SectionTitle title="Сайт"/>
        <SectionDesc>
          Индивидуальный дизайн и архитектура корпоративного сайта выполняют ряд важных задач: презентация компании,
          информирование об услугах и главных новостях Zlata Trade.
        </SectionDesc>
        <ImageWrapper src={ZlataSite} className="devices-image-wrap"/>
      </div>
      <div className="adaptation">
        <SectionTitle title="Адаптация"/>
        <SectionDesc>
          Мы уверены, что современный сайт не может обойтись без адаптации для разных типов устройств. На сайте Zlata
          Trade мы реализовали мультиплатформенность.
        </SectionDesc>
        <Row>
          {IconList.map((icon, index) => (
            <IconAdaptation key={`icon_${index}`} img={icon.img} name={icon.name}/>
          ))}
        </Row>
      </div>
      <div className="about-desktop">
        <ImageWrapper src={ZlataDesktopDevices} className="devices-image-wrap"/>
      </div>
    </SectionLayout>
  )
}
