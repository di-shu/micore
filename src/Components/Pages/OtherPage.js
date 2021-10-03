import React from 'react'
import useTranslation from 'next-translate/useTranslation'
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
import { MainStatue, StatueOptions } from './Config/OtherPageConfigs'

export const OtherPage = () => {
  const { desktop } = useDeviceDetect()
  const { t } = useTranslation('other')
  const sites = t('sites', {}, { returnObjects: true })
  const priceStages = t('miscalculations', {}, { returnObjects: true })

  return (
    <>
      <ServiceMainSection
        isProportions
        statue={MainStatue}
        statueParams={StatueOptions}
        title={t('main.title')}
        desc={t('main.description')}
      />
      <Sites sites={sites}/>
      <ServicePriceMiscalculations isPrice={false} stages={priceStages}/>
      <ServiceFeedback
        title={t('feedback_title')}
        content={<ImageWrapper isDot display={desktop}/>}
      />
      <ServiceShortPortfolio
        content={<ImageWrapper isDot display={!desktop}/>}
        projects={Services.getOthers()}
      />
    </>
  )
}
