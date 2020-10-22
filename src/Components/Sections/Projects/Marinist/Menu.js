import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const MenuImage = '/images/Marinist/Menu.png'

export const Menu = () => {
  return (
    <SectionLayout id="marinist-menu">
      <SectionTitle title="Меню"/>
      <SectionDesc>
        Навигация по сайту простая и быстрая благодаря зафиксированном слева вертикальному меню
      </SectionDesc>
      <ImageWrapper src={MenuImage} className="menu-image"/>
      <ImageWrapper isDot/>
    </SectionLayout>
  )
}
