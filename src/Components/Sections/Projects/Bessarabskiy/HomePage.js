import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { SectionDesc, ImageWrapper, SectionLayout } from '../../../../Components'
/* IMAGES */
const Pepper = '/images/Bessarabkiy/Pepper.png'
const Menu = '/images/Bessarabkiy/MenuPage.png'
const Basket = '/images/Bessarabkiy/BasketPage.png'
const Reservation = '/images/Bessarabkiy/Reservation.png'

export const HomePage = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-home-page">
      <div className="screen-page-wrap">
        <ImageWrapper src={Menu} className="screen-image"/>
        <div className="screen-desc-wrap">
          <p className="screen-name">Меню</p>
          <SectionDesc className="screen-desc">Удобная навигация</SectionDesc>
        </div>
      </div>
      <div className="screen-page-wrap">
        <ImageWrapper src={Basket} className="screen-image"/>
        <div className="screen-desc-wrap">
          <p className="screen-name">Корзина</p>
          <SectionDesc className="screen-desc">
            Всплывающая панель корзины заказа
          </SectionDesc>
        </div>
      </div>
      <div className="screen-page-wrap">
        <ImageWrapper src={Reservation} className="screen-image"/>
        <div className="screen-desc-wrap">
          <p className="screen-name">История заказов</p>
          <SectionDesc className="screen-desc">
            Форма резервирования столика
          </SectionDesc>
        </div>
      </div>
      <ImageWrapper src={Pepper} className="pepper-image"/>
      <ImageWrapper isDot display={minWidthLaptop}/>
    </SectionLayout>
  )
}
