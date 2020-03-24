import React from 'react'
import {
  SectionDesc,
  ImageWrapper,
  SectionTitle,
  SectionLayout,
} from '../../../../Components'
import { AboutSiteFooterContent } from './Config'
/* IMAGES */
const Tomato = '/Assets/Images/Bessarabkiy/Tomato.png'

export const AboutSite = () => (
  <SectionLayout
    id="bessarabskiy-about-site"
    className="about-site-wrapper"
    Footer={AboutSiteFooterContent}
  >
    <ImageWrapper src={Tomato} className="tomato-image"/>
    <ImageWrapper isDot/>
    <SectionTitle title="About site"/>
    <SectionDesc withDot/>
  </SectionLayout>
)
