import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { AboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      isOverflow
      year="2019"
      name="Zlata-Trade"
      link="http://zlata-trade.com"
      description="Агросфера одна из самых развитых отраслей Украины.
      Одним из представителей является Zlata Trade, логистический оператор и трейдер в сфере закупки и продажи зерновых.
      Проект для них начинался с создания фирменного стиля и корпоративного сайта.
      Но позже задачей стало превратить имидж бренда в образ современной, открытой и инновационной компании."
    />
  )
}
