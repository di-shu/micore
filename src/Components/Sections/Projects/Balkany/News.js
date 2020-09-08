import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const BalkanyMac = '/images/Balkany/balkany_mockup7.jpg'

export const News = () => {
  return (
    <SectionLayout id="balkany-news">
      <SectionTitle title="Новости"/>
      <SectionDesc>
        Новостной блок на сайте клуба постоянно обновляется и является самым посещаемым разделом сайта.
      </SectionDesc>
      <ImageWrapper src={BalkanyMac}/>
    </SectionLayout>
  )
}
