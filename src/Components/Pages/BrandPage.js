import React from 'react'
import {
  ImageWrapper,
  ServiceQuote,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio
} from '../SectionsComponents'
import { MakeBranding, MakeLogo } from '../Sections/Services/Branding'
import { Quotes, StatueOptions, BrandingStages, MainStatue } from './Config/BrandPageConfigs'
import { Services } from '../Config'

export const BrandPage = () => {
  return (
    <>
      <ServiceMainSection
        isProportions
        title="Branding"
        statue={MainStatue}
        statueParams={StatueOptions}
        desc="Бренд — это мнение потребителя о компании. А мнение потребителя — это сервис, рекламные коммуникации,
        техподдержка, фирменный стиль, цена.<br>
        <br>
        Для создания у пользователя нужных ассоциаций мы разработаем логотип и проработаем необходимые элементы
        фирменного стиля, составим подробный брендбук и руководство по применению."
      />
      <MakeBranding/>
      <MakeLogo/>
      <ServiceQuote quotes={Quotes} />
      <ServiceWorkStages stages={BrandingStages} title="Этапы разработки фирменного стиля"/>
      <ServiceFeedback title="Заполнить бриф и узнать цену"/>
      <ServiceShortPortfolio
        content={<ImageWrapper isDot/>}
        projects={Services.getBrand()}
      />
    </>
  )
}
