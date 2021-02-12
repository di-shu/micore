import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const BeeGamesPC = '/images/BeeGames/BeeGameDesktopPC.jpg'

export const Last = () => {
  return (
    <SectionLayout
      id="bee-games-last"
      Footer={() => {
        return (
          <>
            <ImageWrapper src={BeeGamesPC}/>
            <BottomNavigation hidden/>
          </>
        )
      }}
    />
  )
}
