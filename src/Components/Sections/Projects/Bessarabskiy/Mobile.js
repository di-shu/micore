import React from 'react'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  BottomNavigation
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const iPhone = '/images/Bessarabskiy/iPhone.png'
const FooterShape = '/images/Bessarabskiy/FooterShape.svg'
const MobilePages = '/images/Bessarabskiy/MobilePages.png'
const DesktopPages = '/images/Bessarabskiy/DesktopPages.png'

const SectionFooter = () => (
  <div className="bottom-wrapper">
    <ImageWrapper src={iPhone} className="iphone-image"/>
    <ImageWrapper src={FooterShape} className="shape-image"/>
    <BottomNavigation/>
  </div>
)

export const Mobile = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-mobile" Footer={SectionFooter}>
      <ImageWrapper isDot/>
      <SectionTitle title="Адаптация"/>
      <SectionDesc>
        Разработка адаптива специфический и трудоемкий процесс. Дизайн для каждого устройства индивидуальный. Текст,
        кнопки, шрифты, анимация меняют свой вид и расположение, не теряя производительности.
      </SectionDesc>
      <ImageWrapper src={DesktopPages} className="site-pages-image" display={minWidthLaptop}/>
      <ImageWrapper src={MobilePages} className="site-pages-image" display={!minWidthLaptop}/>
    </SectionLayout>
  )
}
