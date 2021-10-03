import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  ServiceQuote,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '../SectionsComponents'
import {
  Works,
  MainStatue,
  StatueOptions
} from './Config/LandingPageConfigs'
import { Services } from '../Config'

export const LandingPage = () => {
  const { t } = useTranslation('landing')
  const quotes = t('quotes', {}, { returnObjects: true })
  const workStages = t('works.list', {}, { returnObjects: true })
  const priceStages = t('miscalculations', {}, { returnObjects: true })

  return (
    <>
      <ServiceMainSection
        statue={MainStatue}
        statueParams={StatueOptions}
        title={t('main.title')}
        desc={t('main.description')}
      />
      <ServicePriceMiscalculations stages={priceStages}/>
      <ServiceFeedback title={t('feedback_title')}/>
      <ServiceQuote quotes={quotes}/>
      <ServiceWorkStages stagesImages={Works} stages={workStages} title={t('works.title')}/>
      <ServiceShortPortfolio projects={Services.getLanding()}/>
    </>
  )
}
