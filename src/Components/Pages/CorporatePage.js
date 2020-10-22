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
import { ProjectsList } from '../Config'

export const CorporatePage = () => {
  return (
    <>
      <ServiceMainSection
        statue={MainStatue}
        title="Corporate website"
        statueParams={StatueOptions}
        desc="Корпоративные сайты под бизнес-задачи вашей компании. Создание корпоративного сайта — выгодная и
        долгосрочная инвестиция. После его разработки у вас будет актуальная платформа для общения с аудиторией на
        следующие несколько лет."
      />
      <ServicePriceMiscalculations stages={CorporateStages}/>
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={CorporateWorkingStages} title="Этапы работы"/>
      <ServiceShortPortfolio
        projects={[ProjectsList[0].content[0], ProjectsList[0].content[2], ProjectsList[0].content[5]]}
      />
    </>
  )
}
