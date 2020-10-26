import React from 'react'
import { PrideAboutInfo } from './Config'
import { ProjectAboutSection } from '../../../SectionsComponents'

export const About = () => {
  return (
    <ProjectAboutSection
      isOverflow
      year="февраль, 2019"
      name="Pride Logistics"
      link="pride-logistika.com"
      description="Уверенный взгляд льва отражает цель молодой компании Pride Logistics - стать лидером Украины в сфере логистики.
      Компания обратилась в нашу студию с задачей разработать фирменный стиль и корпоративный сайт.
      В фирменном стиле нам предстояло воплотить также философию и конкурентные преимущества компании: профессионализм,
      надежность и скорость."
    />
  )
}
