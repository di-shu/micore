import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const BalkanyScarf = '/images/Balkany/BalkanyScarf.png'
const BalkanyStadiumFan = '/images/Balkany/BalkanyStadiumFan.png'

export const Fan = () => {
  return (
    <SectionLayout
      id="balkany-fan"
      Header={() => <ImageWrapper src={BalkanyScarf} className="scarf"/>}
      Footer={() => <ImageWrapper src={BalkanyStadiumFan} className="stadium"/>}
    >
      <SectionTitle title="About fan club"/>
      <SectionDesc withDot/>
    </SectionLayout>
  )
}
