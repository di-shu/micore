import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/* IMAGES */
const MainLogo = '/Assets/Images/Bessarabkiy/MainLogo.svg'

export const Logo = () => (
  <SectionLayout id="bessarabskiy-logo" Header={() => <ImageWrapper isDot />}>
    <ImageWrapper src={MainLogo} />
  </SectionLayout>
)
