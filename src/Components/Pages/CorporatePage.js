import React from 'react'
import {
  ServiceQuote,
  ServiceTarget,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '../SectionsComponents'
import {
  Quotes,
  MainStatue,
  StatueOptions,
  CorporateStages,
  CorporateWorkingStages
} from './Config/CorporatePageConfigs'

export const CorporatePage = () => {
  return (
    <>
      <ServiceMainSection title="Corporate website" statue={MainStatue} statueParams={StatueOptions}/>
      <ServiceTarget/>
      <ServicePriceMiscalculations stages={CorporateStages}/>
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={CorporateWorkingStages} title="Этапы работы"/>
      <ServiceShortPortfolio/>
    </>
  )
}
