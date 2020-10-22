import React from 'react'
import { FlipBook, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { MarinistLogobook } from './Config'

export const Logobook = () => {
  return (
    <SectionLayout id="marinist-logobook">
      <SectionTitle title="Логобук"/>
      <SectionDesc>
        Ввиду большого количества будущих носителей бренда, появилась необходимость логобука - правил использования
        логотипа
      </SectionDesc>
      <FlipBook pages={MarinistLogobook}/>
    </SectionLayout>
  )
}
