import React from 'react'
import { ImageWrapper, ServiceFeedback, ServiceMainSection, ServiceQuote, ServiceShortPortfolio, ServiceWorkStages } from '../../src/Components'
import MainWrapper from '../../src/Components/SectionsComponents/MainWrapper'
import { MakeBranding, MakeLogo } from '../../src/Components/Sections/Services/Branding'
import '~/Styles/Pages/Services/branding.scss'

const MainStatue = '/Assets/images/Services/Branding/MainStatue.png'
const Briefing = '/Assets/images/Services/Branding/Icons/Brifing.svg'
const Miscalculation = '/Assets/images/Services/Branding/Icons/Miscalculation.svg'
const ActBrief = '/Assets/images/Services/Branding/Icons/ActBrief.svg'
const Creating = '/Assets/images/Services/Branding/Icons/Creating.svg'
const FormStyle = '/Assets/images/Services/Branding/Icons/FormStyle.svg'
const Sources = '/Assets/images/Services/Branding/Icons/Sources.svg'

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

const BrandingStages = [
  { img: Briefing, name: 'Брифинг' },
  { img: Miscalculation, name: 'Просчет' },
  { img: ActBrief, name: 'Подписание договора и брифа' },
  { img: Creating, name: 'Создание логотипа' },
  { img: FormStyle, name: 'Создание элементов фирменного стиля' },
  { img: Sources, name: 'Передача исходников' }
]

const StatueOptions = {
  statueW: 610,
  statueH: 840,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0
}

const Brand = () => {
  return (
    <MainWrapper id="branding-service-page">
      <ServiceMainSection title="Branding" statue={MainStatue} isProportions statueParams={StatueOptions}/>
      <MakeBranding/>
      <MakeLogo/>
      <ServiceQuote quotes={Quotes} />
      <ServiceWorkStages stages={BrandingStages} title="Этапы разработки фирменного стиля"/>
      <ServiceFeedback title="Заполнить бриф и узнать цену"/>
      <ServiceShortPortfolio content={<ImageWrapper isDot/>}/>
    </MainWrapper>
  )
}

export default Brand
