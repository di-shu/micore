import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'

const BalkanyScarf = '/images/Balkany/balkany_mockup3.png'
const BalkanyStadiumFan = '/images/Balkany/balkany_mockup4.jpg'

export const Fan = () => {
  return (
    <SectionLayout
      id="balkany-fan"
      Header={() => <ImageWrapper src={BalkanyScarf} className="scarf"/>}
      Footer={() => <ImageWrapper src={BalkanyStadiumFan} className="stadium"/>}
    >
      <SectionTitle title="Фан клуб"/>
      <SectionDesc>
        Хотя «Балканы» и молодой футбольный клуб, у него уже есть свои активные и преданные фанаты. Мы создали фирменный
        дизайн фанатской атрибутики: флаги, шарфы, футболки и т.д. Новая айдентика теперь присутствует и на трибунах
        стадионов, куда приезжают болельщики поддержать родную команду.
      </SectionDesc>
    </SectionLayout>
  )
}
