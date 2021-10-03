import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Services } from '../Config'
import {
  ServiceQuote,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '../SectionsComponents'
import {
  MainStatue,
  StatueOptions,
  CorporateWorkingStages
} from './Config/CorporatePageConfigs'

export const CorporatePage = () => {
  const { t } = useTranslation('corporate')
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
      <ServiceWorkStages stagesImages={CorporateWorkingStages} stages={workStages} title={t('works.title')}/>
      <ServiceShortPortfolio projects={Services.getCorporate()}/>
    </>
  )
}
