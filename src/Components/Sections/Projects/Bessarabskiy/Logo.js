import React from 'react'
import { ImageWrapper, SectionLayout } from '../../../SectionsComponents'

const MainLogo = '/images/Bessarabskiy/logo3.jpg'

export const Logo = () => (
  <SectionLayout id="bessarabskiy-logo" Header={() => <ImageWrapper isDot />}>
    <ImageWrapper src={MainLogo} />
  </SectionLayout>
)
