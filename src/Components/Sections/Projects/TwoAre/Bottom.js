import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/*IMAGES*/
const PosterImg = '/Assets/Images/TwoAre/FooterPoster.png'
const PosterImgMobile = '/Assets/Images/TwoAre/FooterPosterMobile.png'

export const Bottom = () => {
  const { mobile } = useDeviceDetect()

  return (
    <SectionLayout id="two-are-bottom" Footer={() => <BottomNavigation />}>
      <ImageWrapper src={mobile ? PosterImgMobile : PosterImg} className="poster-image" />
    </SectionLayout>
  )
}
