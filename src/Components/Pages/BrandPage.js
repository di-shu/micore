import React from 'react'
import {
  ImageWrapper,
  ServiceQuote,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio
} from '../SectionsComponents'
import { MakeBranding, MakeLogo } from '../Sections/Services/Branding'
import { Quotes, StatueOptions, BrandingStages, MainStatue } from './Config/BrandPageConfigs'

export const BrandPage = () => {
  return (
    <>
      <ServiceMainSection title="Branding" statue={MainStatue} isProportions statueParams={StatueOptions}/>
      <MakeBranding/>
      <MakeLogo/>
      <ServiceQuote quotes={Quotes} />
      <ServiceWorkStages stages={BrandingStages} title="Этапы разработки фирменного стиля"/>
      <ServiceFeedback title="Заполнить бриф и узнать цену"/>
      <ServiceShortPortfolio content={<ImageWrapper isDot/>}/>
    </>
  )
}
