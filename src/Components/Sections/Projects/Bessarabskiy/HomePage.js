import React from 'react'
import { HomePageHeaderContent } from './Config'
import { useDeviceDetect } from '../../../../Helpers'
import { SectionDesc, ImageWrapper, SectionTitle, SectionLayout } from '../../../../Components'
/* IMAGES */
const Pepper = '/Assets/Images/Bessarabkiy/Pepper.png'
const Menu = '/Assets/Images/Bessarabkiy/MenuPage.png'
const Basket = '/Assets/Images/Bessarabkiy/BasketPage.png'
const Reservation = '/Assets/Images/Bessarabkiy/Reservation.png'

export const HomePage = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="bessarabskiy-home-page"
      Header={HomePageHeaderContent}
    >
      {!minWidthLaptop && (
        <>
          <SectionTitle title="Home page"/>
          <SectionDesc withDot/>
        </>
      )}
      <div className="screen-page-wrap">
        <ImageWrapper src={Menu} className="screen-image"/>
        <div className="screen-desc-wrap">
          <p className="screen-name">Menu</p>
          <SectionDesc className="screen-desc"/>
        </div>
      </div>
      <div className="screen-page-wrap">
        <ImageWrapper src={Basket} className="screen-image"/>
        <div className="screen-desc-wrap">
          <p className="screen-name">Basket</p>
          <SectionDesc className="screen-desc"/>
        </div>
      </div>
      <div className="screen-page-wrap">
        <ImageWrapper src={Reservation} className="screen-image"/>
        <div className="screen-desc-wrap">
          <p className="screen-name">Reservation</p>
          <SectionDesc className="screen-desc"/>
        </div>
      </div>
      <ImageWrapper src={Pepper} className="pepper-image"/>
      <ImageWrapper isDot display={minWidthLaptop} />
    </SectionLayout>
  )
}
