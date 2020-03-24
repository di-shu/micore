import React from 'react'
import { BottomNavigation, ImageWrapper, SectionDesc, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const BeeGamesPC = '/Assets/Images/BeeGames/BeeGameDesktopPC.png'

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
