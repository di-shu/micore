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
import '~/Styles/Pages/Services/landing.scss'
/*IMAGES*/
const MainStatue = '/images/Services/LandingPage/MainStatue.png'
const TZ = '/images/Services/LandingPage/Icons/TZ.svg'
const Design = '/images/Services/LandingPage/Icons/Design.svg'
const Content = '/images/Services/LandingPage/Icons/Content.svg'
const Develop = '/images/Services/LandingPage/Icons/Develop.svg'
const Prototype = '/images/Services/LandingPage/Icons/Prototype.svg'
const DogovoriTZ = '/images/Services/LandingPage/Icons/DogovoriTZ.svg'
const ContentFill = '/images/Services/LandingPage/Icons/ContentFill.svg'
const LoadSiteOnDomen = '/images/Services/LandingPage/Icons/LoadSiteOnDomen.svg'

const LandingStages = [
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
const Stages = [
  { img: TZ, name: 'Составление технического задания' },
  { img: DogovoriTZ, name: 'Подписание договора и тз' },
  { img: Prototype, name: 'Создание прототипа сайта' },
  { img: Design, name: 'Отрисовка дизайна' },
  { img: Content, name: 'Подготовка контента' },
  { img: Develop, name: 'Разработка сайта' },
  { img: ContentFill, name: 'Наполнение контентом' },
  { img: LoadSiteOnDomen, name: 'Загрузка сайта на домен' },
]

const StatueOptions = {
  statueW: 935,
  statueH: 850,
  statue: MainStatue,
  posX: 'left',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 60,
  offsetY: 0
}

const Landing = () => {
  return (
    <MainWrapper id="landing-service-page">
      <ServiceMainSection title="Landing page" statue={MainStatue} statueParams={StatueOptions} />
      <ServiceTarget />
      <ServicePriceMiscalculations stages={LandingStages} />
      <ServiceFeedback title="Получить первичный просчет в течении суток"/>
      <ServiceQuote quotes={Quotes}/>
      <ServiceWorkStages stages={Stages} title="Этапы работы"/>
      <ServiceShortPortfolio />
    </MainWrapper>
  )
}

export default Landing
