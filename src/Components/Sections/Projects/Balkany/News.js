import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const BalkanyMac = '/Assets/Images/Balkany/BalkanyMac.png'

export const News = () => {
  return (
    <SectionLayout id="balkany-news" Header={() => <SectionLine direction="top"/>}>
      <SectionTitle title="News"/>
      <SectionDesc/>
      <ImageWrapper src={BalkanyMac}/>
    </SectionLayout>
  )
}
