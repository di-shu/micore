const TZ = '/images/Services/LandingPage/Icons/TZ.svg'
const Design = '/images/Services/LandingPage/Icons/Design.svg'
const Content = '/images/Services/LandingPage/Icons/Content.svg'
const Develop = '/images/Services/LandingPage/Icons/Develop.svg'
const Prototype = '/images/Services/LandingPage/Icons/Prototype.svg'
const DogovoriTZ = '/images/Services/LandingPage/Icons/DogovoriTZ.svg'
const ContentFill = '/images/Services/LandingPage/Icons/ContentFill.svg'
const LoadSiteOnDomen = '/images/Services/LandingPage/Icons/LoadSiteOnDomen.svg'

export const MainStatue = '/images/Services/LandingPage/MainStatue.png'

export const LandingStages = [
  {
    title: 'Обсуждение проекта',
    desc: 'В начале обычно задача звучит так: «мне нужен лендинг для продажи телефонов, сколько стоит?'
  },
  {
    title: 'Первичные требования',
    desc: 'Но нам нужны детали. Каких телефонов? Сколько моделей? Какие блоки должны быть?'
  },
  {
    title: 'Техническое задание',
    desc: 'Мы составляем первичное ТЗ исходя из полученных данных при обсуждении проекта.'
  },
  {
    title: 'Сроки и стоимость',
    desc: 'Озвучиваем срок и стоимость, при необходимости предлагаем альтернативные варианты.'
  },
  {
    title: 'Детализация ТЗ',
    desc: 'Озвучиваем срок и стоимость, при необходимости предлагаем альтернативные варианты.'
  },
  {
    title: 'Конечная стоимость',
    desc: 'Даём финальную оценку, подписываем документы и стартуем проект.'
  }
]

export const Quotes = [
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

export const Stages = [
  { img: TZ, name: 'Составление технического задания' },
  { img: DogovoriTZ, name: 'Подписание договора и тз' },
  { img: Prototype, name: 'Создание прототипа сайта' },
  { img: Design, name: 'Отрисовка дизайна' },
  { img: Content, name: 'Подготовка контента' },
  { img: Develop, name: 'Разработка сайта' },
  { img: ContentFill, name: 'Наполнение контентом' },
  { img: LoadSiteOnDomen, name: 'Загрузка сайта на домен' },
]

export const StatueOptions = {
  statueW: 935,
  statueH: 850,
  statue: MainStatue,
  posX: 'left',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 60,
  offsetY: 0
}
