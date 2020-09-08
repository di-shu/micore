import React from 'react'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const TabletDevices = '/images/Balkany/balkany_mockup10.png'

export const Tablet = () => {
  return (
    <SectionLayout id="balkany-tablet" Footer={() => <BottomNavigation />}>
      <ImageWrapper src={TabletDevices} className="devices-image-wrap"/>
    </SectionLayout>
  )
}
