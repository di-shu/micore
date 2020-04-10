import React from 'react'
import { ImageWrapper, ServiceFeedback, ServiceMainSection, ServicePriceMiscalculations, ServiceShortPortfolio } from '../../src/Components'
import { Sites } from '../../src/Components/Sections/Services/Other'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
import '~/Styles/Pages/Services/other.scss'
import { useDeviceDetect } from '../../src/Helpers'

const MainStatue = '/Assets/Images/Services/Other/MainStatue.png'

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

const StatueOptions = {
  statueW: 560,
  statueH: 840,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0
}

const Other = () => {
  const { desktop } = useDeviceDetect()

  return (
    <MainWrapper id="other-service-page">
      <ServiceMainSection title="Other" statue={MainStatue} isProportions statueParams={StatueOptions}/>
      <Sites/>
      <ServicePriceMiscalculations isPrice={false} stages={OtherStages}/>
      <ServiceFeedback
        title="Получить первичный просчет в течении суток"
        content={<ImageWrapper isDot display={desktop}/>}
      />
      <ServiceShortPortfolio content={<ImageWrapper isDot display={!desktop}/>}/>
    </MainWrapper>
  )
}

export default Other
