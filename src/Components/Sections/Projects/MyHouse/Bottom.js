import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const BottomBg = '/images/MyHouse/bottom.jpg'

export const Bottom = () => {
  return (
    <SectionLayout
      id="my-house-bottom"
      Footer={() => {
        return (
          <>
            <ImageWrapper src={BottomBg}/>
            <BottomNavigation link="svoydom.od.com.ua" />
          </>
        )
      }}
    />
  )
}