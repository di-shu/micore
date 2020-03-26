import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const AboutImg = '/Assets/Images/ManticoreProject/AboutName.png'

export const AboutName = () => {
  return (
    <SectionLayout id="manticore-about-name">
      <SectionDesc className="sub-title">От идеи мечтателей</SectionDesc>
      <SectionTitle>к названию <span>компании</span></SectionTitle>
      <ImageWrapper src={AboutImg} className="about-name-image"/>
      <div className="name-container">
        <div className="left-part">
          <h5 className="name-title first-part-name">Manti</h5>
          <p className="text-desc">мантисса</p>
        </div>
        <div className="right-part">
          <h5 className="name-title second-part-name">Core</h5>
          <p className="text-desc">ядро</p>
        </div>
      </div>
      <SectionDesc className="about-name-desc">
        Нет, название не связано с мифическим существом. Название строится из мантиссы, дробной части логарифма числа, и ядра. Почему так? Почему бы и нет? Звучит круто.
      </SectionDesc>
    </SectionLayout>
  )
}
