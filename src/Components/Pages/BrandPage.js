import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  ImageWrapper,
  ServiceQuote,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio
} from '../SectionsComponents'
import { Services } from '../Config'
import { MakeBranding, MakeLogo } from '../Sections/Services/Branding'
import { StatueOptions, BrandingStages, MainStatue } from './Config/BrandPageConfigs'

export const BrandPage = () => {
  const { t } = useTranslation('branding')
  const quotes = t('quotes', {}, { returnObjects: true })
  const workStages = t('works.list', {}, { returnObjects: true })

  return (
    <>
      <ServiceMainSection
        isProportions
        statue={MainStatue}
        statueParams={StatueOptions}
        title={t('main.title')}
        desc={t('main.description')}
      />
      <MakeBranding/>
      <MakeLogo/>
      <ServiceQuote quotes={quotes} />
      <ServiceWorkStages stagesImages={BrandingStages} stages={workStages} title={t('works.title')}/>
      <ServiceFeedback title={t('feedback_title')}/>
      <ServiceShortPortfolio content={<ImageWrapper isDot/>} projects={Services.getBrand()}/>
    </>
  )
}
