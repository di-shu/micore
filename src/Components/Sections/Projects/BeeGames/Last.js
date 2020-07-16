import React from 'react'
import { BottomNavigation, ImageWrapper, SectionDesc, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const BeeGamesPC = '/images/BeeGames/BeeGameDesktopPC.png'

export const Last = () => {
  return (
    <SectionLayout
      id="bee-games-last"
      Footer={() => {
        return (
          <>
            <ImageWrapper src={BeeGamesPC}/>
            <BottomNavigation/>
          </>
        )
      }}
    >
      <SectionDesc/>
    </SectionLayout>
  )
}
