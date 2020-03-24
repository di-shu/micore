import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const WavesPattern = '/Assets/Images/Marinist/WavesPattern.png'
const OtherPagesImage = '/Assets/Images/Marinist/OtherPages.png'
const OtherPagesMobile = '/Assets/Images/Marinist/OtherPagesMobile.png'

const SectionHeader = () => <ImageWrapper src={WavesPattern} className="waves-pattern" />

export const OtherPages = () => {
  const { mobile } = useDeviceDetect()

  return (
    <SectionLayout id="marinist-other-pages" Header={SectionHeader}>
      <SectionTitle title="Other pages" />
      <SectionDesc withDot />
      <ImageWrapper src={mobile ? OtherPagesMobile : OtherPagesImage} className="other-pages" />
    </SectionLayout>
  )
}
