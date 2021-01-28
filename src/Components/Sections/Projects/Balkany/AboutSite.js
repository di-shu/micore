import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const Devices = '/images/Balkany/balkany_mockup6.png'
const AboutSiteImg = '/images/Balkany/AboutSiteImage.jpg'

export const AboutSite = () => {
  return (
    <SectionLayout id="balkany-about-site" Header={() => <ImageWrapper src={AboutSiteImg} className="main"/>}>
      <SectionTitle title="Сайт"/>
      <SectionDesc>
        Важная часть проекта - веб-сайт футбольного клуба. Ресурс выполнен в лаконичном фирменном дизайне и содержит
        максимум полезного функционала. Его ключевая особенность - объемная административная панель для управления
        практически всеми разделами сайта.
      </SectionDesc>
      <ImageWrapper src={Devices} className="devices"/>
    </SectionLayout>
  )
}
