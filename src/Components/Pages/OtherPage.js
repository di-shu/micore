import React from 'react'
import {
  ImageWrapper,
  ServiceFeedback,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '../SectionsComponents'
import { Services } from '../Config'
import { useDeviceDetect } from '../../Helpers'
import { Sites } from '../Sections/Services/Other'
import { MainStatue, StatueOptions, OtherStages } from './Config/OtherPageConfigs'

export const OtherPage = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <ServiceMainSection
        title="Other"
        isProportions
        statue={MainStatue}
        statueParams={StatueOptions}
        desc="При разработке сложного продукта мы практикуем MVP подход, суть которого в создании минимально
        жизнеспособной версии проекта. Последующими этапами дорабатывая продукт на основе полученных данных от целевой
        аудитории и сгенерированных идей в ходе работы"
      />
      <Sites/>
      <ServicePriceMiscalculations isPrice={false} stages={OtherStages}/>
      <ServiceFeedback
        title="Получить первичный просчет в течении суток"
        content={<ImageWrapper isDot display={desktop}/>}
      />
      <ServiceShortPortfolio
        content={<ImageWrapper isDot display={!desktop}/>}
        projects={Services.getOthers()}
      />
    </>
  )
}
