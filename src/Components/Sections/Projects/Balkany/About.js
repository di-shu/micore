import React from 'react'
import { ProjectAboutSection, ImageWrapper } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { AboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      isLine
      isOverflow
      year="2018"
      name="Balkany"
      link="fcbalkans.com.ua"
      description="Футбольный клуб “Балканы” - клуб с уникальной историей становления, прошел путь от аматорского
      сельского коллектива до профессиональной футбольной команды. За стремительным ростом клуба последовала
      необходимость ребрендинга. В этом проекте перед нами предстала задача создать современную бренд-айдентику и
      передать в ней ценности футбольного клуба."
    />
  )
}
