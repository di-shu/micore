import React from 'react'
import {
  ServiceQuote,
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
import { ProjectsList } from '../Config'

export const LandingPage = () => {
  return (
    <>
      <ServiceMainSection
        title="Landing page"
        statue={MainStatue}
        statueParams={StatueOptions}
        desc="
          Сегодня недостаточно только продукта. В комбинацию к нему нужны разработанные инструменты продаж. Если вы
          планируете продавать в интернете товар или услугу - то для этой цели подойдёт лендинг.<br>
          <br>
          Мы создадим для вас продукт, который оценит целевая аудитории и выделит компанию среди конкурентов.
        "
      />
      <ServicePriceMiscalculations stages={LandingStages}/>
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={Stages} title="Этапы работы"/>
      <ServiceShortPortfolio
        projects={[ProjectsList[0].content[2], ProjectsList[0].content[3], ProjectsList[1].content[0]]}
      />
    </>
  )
}
