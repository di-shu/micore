import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const BottomBg = '/images/Dealok/bottom.png'

export const Bottom = () => {
  return (
    <SectionLayout id="dealok-bottom" Footer={() => {
        return (
          <>
            <BottomNavigation hidden/>
          </>
        )
      }}>
			<ImageWrapper src={BottomBg} className="bottom-img"/>
			</SectionLayout>
  )
}