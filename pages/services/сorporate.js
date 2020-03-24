import React from 'react'
import {
  MainWrapper,
  ServiceQuote,
  ServiceTarget,
  ServiceFeedback,
  ServiceWorkStages,
  ServiceMainSection,
  ServiceShortPortfolio,
  ServicePriceMiscalculations
} from '~/Components'
import '~/Styles/Pages/services/corporate.scss'

const MainStatue = '/Assets/Images/services/Corporate/MainStatue.png'
const Briefing = '/Assets/Images/services/Branding/Icons/Brifing.svg'
const Miscalculation = '/Assets/Images/services/Branding/Icons/Miscalculation.svg'
const ActBrief = '/Assets/Images/services/Branding/Icons/ActBrief.svg'
const Creating = '/Assets/Images/services/Branding/Icons/Creating.svg'
const FormStyle = '/Assets/Images/services/Branding/Icons/FormStyle.svg'
const Sources = '/Assets/Images/services/Branding/Icons/Sources.svg'

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

const Orporate = () => {
  return (
    <MainWrapper id="corporate-service-page">
      <ServiceMainSection title="Corporate website" statue={MainStatue}/>
      <ServiceTarget/>
      <ServicePriceMiscalculations stages={CorporateStages}/>
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={CorporateWorkingStages} title="Этапы работы"/>
      <ServiceShortPortfolio/>
    </MainWrapper>
  )
}

export default Orporate
