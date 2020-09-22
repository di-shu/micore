import React from 'react'
import {
  ImageWrapper,
  ServiceFeedback,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '../SectionsComponents'
import { useDeviceDetect } from '../../Helpers'
import { Sites } from '../Sections/Services/Other'
import { MainStatue, StatueOptions, OtherStages } from './Config/OtherPageConfigs'

export const OtherPage = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <ServiceMainSection title="Other" statue={MainStatue} isProportions statueParams={StatueOptions}/>
      <Sites/>
      <ServicePriceMiscalculations isPrice={false} stages={OtherStages}/>
      <ServiceFeedback
        title="Получить первичный просчет в течении суток"
        content={<ImageWrapper isDot display={desktop}/>}
      />
      <ServiceShortPortfolio content={<ImageWrapper isDot display={!desktop}/>}/>
    </>
  )
}
