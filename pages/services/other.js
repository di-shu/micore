import React from 'react'
import { isBrowser } from 'react-device-detect'
import {
  MainWrapper,
  ImageWrapper,
  ServiceFeedback,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '~/Components'
import { Sites } from '~/Components/Sections/services/Other'
import '~/Styles/Pages/services/other.scss'

const MainStatue = '/Assets/Images/services/Other/MainStatue.png'

const OtherStages = [
  {
    title: 'Обсуждение проекта',
    desc: 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia.'
  },
  {
    title: 'Первичные требования',
    desc: 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia.'
  },
  {
    title: 'Техническое задание',
    desc: 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia.'
  },
  {
    title: 'Сроки и стоимость',
    desc: 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia.'
  },
  {
    title: 'Детализация ТЗ',
    desc: 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia.'
  },
  {
    title: 'Конечная стоимость',
    desc: 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia.'
  }
]

const Other = () => {
  return (
    <MainWrapper id="other-service-page">
      <ServiceMainSection title="Other" statue={MainStatue}/>
      <Sites/>
      <ServicePriceMiscalculations isPrice={false} stages={OtherStages}/>
      <ServiceFeedback
        title="Получить первичный просчет в течении суток"
        content={<ImageWrapper isDot display={isBrowser}/>}
      />
      <ServiceShortPortfolio content={<ImageWrapper isDot display={!isBrowser}/>}/>
    </MainWrapper>
  )
}

export default Other
