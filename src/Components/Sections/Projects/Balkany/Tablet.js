import React from 'react'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const TabletDevices = '/Assets/Images/Balkany/TabletDevices.png'

export const Tablet = () => {
  return (
    <SectionLayout id="balkany-tablet" Footer={() => <BottomNavigation />}>
      <SectionTitle title="About tablet"/>
      <SectionDesc/>
      <ImageWrapper src={TabletDevices} className="devices-image-wrap"/>
    </SectionLayout>
  )
}
