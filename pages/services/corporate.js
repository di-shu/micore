import React from 'react'
import {
  ServiceFeedback,
  ServiceMainSection,
  ServicePriceMiscalculations,
  ServiceQuote,
  ServiceShortPortfolio,
  ServiceTarget,
  ServiceWorkStages
} from '../../src/Components'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
import '~/Styles/Pages/Services/corporate.scss'
/*IMAGES*/
const MainStatue = '/Assets/images/Services/Corporate/MainStatue.png'
const Briefing = '/Assets/images/Services/Branding/Icons/Brifing.svg'
const Miscalculation = '/Assets/images/Services/Branding/Icons/Miscalculation.svg'
const ActBrief = '/Assets/images/Services/Branding/Icons/ActBrief.svg'
const Creating = '/Assets/images/Services/Branding/Icons/Creating.svg'
const FormStyle = '/Assets/images/Services/Branding/Icons/FormStyle.svg'
const Sources = '/Assets/images/Services/Branding/Icons/Sources.svg'

const CorporateStages = [
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

const Quotes = [
  'Мы не опаздываем потому, что не спешим. Проекты в срок.',
  'Предыдущая цитата ложь, неверьте ей!',
  'Лэндинги у нас получаются иногда СЛИШКОМ большими.',
  'Давайте сделаем лендинг на реакте!',
  'Иногда при скролле лендинга может поломаться колесеко от мышки, но МЫ его сможем починить!',
  'Здесь должна была быть какая то цитата, но контентмэйкер забил на нее. Теперь ей грустно :(',
  'Если вам попалась эта цитата, знайте, вы сейчас смотрите сайт!',
  'У нас работает акция! Купи один лэндинг по цене двух! Как-то так.',
  'Анимации очень ценятся на лендингах, но больше ценятся те, кто их делает. Берегите своих разработчиков!'
]

const CorporateWorkingStages = [
  { img: Briefing, name: 'Брифинг' },
  { img: Miscalculation, name: 'Просчет' },
  { img: ActBrief, name: 'Подписание договора и брифа' },
  { img: Creating, name: 'Создание логотипа' },
  { img: FormStyle, name: 'Создание элементов фирменного стиля' },
  { img: Sources, name: 'Передача исходников' }
]

const StatueOptions = {
  statueW: 995,
  statueH: 940,
  statue: MainStatue,
  posX: 'left',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 45,
  offsetY: 70
}

const Corporate = () => {
  return (
    <MainWrapper id="corporate-service-page">
      <ServiceMainSection title="Corporate website" statue={MainStatue} statueParams={StatueOptions}/>
      <ServiceTarget/>
      <ServicePriceMiscalculations stages={CorporateStages}/>
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={CorporateWorkingStages} title="Этапы работы"/>
      <ServiceShortPortfolio/>
    </MainWrapper>
  )
}

export default Corporate
