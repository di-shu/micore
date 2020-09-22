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
  Stages,
  MainStatue,
  StatueOptions,
  LandingStages
} from './Config/LandingPageConfigs'

export const LandingPage = () => {
  return (
    <>
      <ServiceMainSection title="Landing page" statue={MainStatue} statueParams={StatueOptions} />
      <ServiceTarget />
      <ServicePriceMiscalculations stages={LandingStages} />
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={Stages} title="Этапы работы"/>
      <ServiceShortPortfolio />
    </>
  )
}
