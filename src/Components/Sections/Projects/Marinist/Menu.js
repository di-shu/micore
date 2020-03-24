import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const MenuImage = '/Assets/Images/Marinist/Menu.png'

export const Menu = () => {
  return (
    <SectionLayout id="marinist-menu">
      <SectionTitle title="Menu" />
      <SectionDesc withDot />
      <ImageWrapper src={MenuImage} className="menu-image" />
      <ImageWrapper isDot />
    </SectionLayout>
  )
}
