import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AboutSiteInfo } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, TypeSomething } from '../../../../Components'
/* IMAGES */
const AboutSiteImage = '/images/Marinist/AboutSite.png'

export const AboutSite = () => {
  return (
    <SectionLayout id="marinist-about-site">
      <ImageWrapper isDot/>
      <SectionTitle title="Сайт"/>
      <SectionDesc>
        Сайт резиденции МARINIST - платформа для презентации и продажи квартир. Дизайн продолжает визуальный стиль
        проекта. А эффекты и микро анимации подчеркивают важные элементы веб-дизайна. Сайт содержит ряд важных раздел и
        обширный функционал: пользователь с его помощью может искать квартиры через планировку дома или классический
        поиск по параметрам, а администратор управлять большинством разделов сайта.
      </SectionDesc>
      <ImageWrapper src={AboutSiteImage} className="about-site-image"/>
    </SectionLayout>
  )
}
