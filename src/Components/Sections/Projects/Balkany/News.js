import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const BalkanyMac = '/images/Balkany/BalkanyMac.png'

export const News = () => {
  return (
    <SectionLayout id="balkany-news">
      <SectionTitle title="News"/>
      <SectionDesc/>
      <ImageWrapper src={BalkanyMac}/>
    </SectionLayout>
  )
}
