import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'

export const About = () => {
  return (
    <ProjectAboutSection
      isOverflow
      year="сентябрь, 2020"
      name="TFC Platform"
      link="closed system"
      description="Когда начался карантин, большинство компаний оказались к нему не готовы. Наш клиент - английская школа, в начале использовала Zoom. К нам обратились с целью разработать платформу для онлайн изучения английского языка: расписание, домашние задания, оценки и т.д."
    />
  )
}