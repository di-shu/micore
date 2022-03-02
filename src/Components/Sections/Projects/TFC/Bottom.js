import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const BottomBg = '/images/TFC/bottom.jpg'

export const Bottom = () => {
  return (
    <SectionLayout
      id="tfc-bottom"
      Footer={() => {
        return (
          <>
            <ImageWrapper src={BottomBg}/>
            <BottomNavigation hidden/>
          </>
        )
      }}
    />
  )
}