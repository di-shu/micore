import React from 'react'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const WavesPattern = '/images/Marinist/WavesPattern.png'
const OtherPagesImage = '/images/Marinist/OtherPages.png'
const OtherPagesMobile = '/images/Marinist/OtherPagesMobile.png'

const SectionHeader = () => <ImageWrapper src={WavesPattern} className="waves-pattern"/>

export const OtherPages = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <SectionLayout id="marinist-other-pages" Header={SectionHeader}>
      <SectionTitle title="Другие страницы"/>
      <SectionDesc>
        На других страницах сайта представлена вся важная информация о резиденции МARINIST: данные о проекте, информация
        о застройщике, разрешительные документы, галерея с фото и видео.
      </SectionDesc>
      <ImageWrapper src={mobile ? OtherPagesMobile : OtherPagesImage} className="other-pages"/>
    </SectionLayout>
  )
}
