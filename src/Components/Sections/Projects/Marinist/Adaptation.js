import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/*IMAGES*/
const DeviceAdaptation = '/images/Marinist/DeviceAdaptation.png'

export const Adaptation = () => {
  return (
    <SectionLayout id="marinist-adaptation">
      <div className="adaptation-device-wrap">
        <ImageWrapper isDot />
        <ImageWrapper src={DeviceAdaptation} className="device-image" />
      </div>
    </SectionLayout>
  )
}
