const Sources = '/images/Services/Branding/Icons/Sources.svg'
const Briefing = '/images/Services/Branding/Icons/Brifing.svg'
const ActBrief = '/images/Services/Branding/Icons/ActBrief.svg'
const Creating = '/images/Services/Branding/Icons/Creating.svg'
const FormStyle = '/images/Services/Branding/Icons/FormStyle.svg'
const Miscalculation = '/images/Services/Branding/Icons/Miscalculation.svg'

export const MainStatue = '/images/Services/Corporate/MainStatue.png'

export const CorporateStages = [
  {
    title: 'Обсуждение проекта',
    desc: 'В начале обычно задача звучит так: «Я хочу корпоративный сайт, сколько стоит?'
  },
  {
    title: 'Первичные требования',
    desc: 'Но нам нужны детали: о вашей компании; об услугах; какие блоки должны быть.'
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
    desc: 'Дополняем ТЗ деталями, урезаем или дополняем функционал после первичной оценки, утверждаем.'
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

export const CorporateWorkingStages = [
  { img: Briefing, name: 'Брифинг' },
  { img: Miscalculation, name: 'Просчет' },
  { img: ActBrief, name: 'Подписание договора и брифа' },
  { img: Creating, name: 'Создание логотипа' },
  { img: FormStyle, name: 'Создание элементов фирменного стиля' },
  { img: Sources, name: 'Передача исходников' }
]

export const StatueOptions = {
  statueW: 995,
  statueH: 940,
  statue: MainStatue,
  posX: 'left',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 45,
  offsetY: 70
}
