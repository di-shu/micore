const SlideImage = '/images/Marinist/SlideImage.png'
const SelectionPage = '/images/Marinist/SelectionPage.png'
const FontExample1 = '/images/Marinist/marinist_font_1.svg'
const FontExample2 = '/images/Marinist/marinist_font_2.svg'
const FontExample3 = '/images/Marinist/marinist_3.svg'
const FontExample4 = '/images/Marinist/marinist_4.svg'
const ApartmentSelection = '/images/Marinist/ApartmentSelection.png'
const SelectionByParameters = '/images/Marinist/SelectionByParameters.png'
/* LOGOBOOK IMAGES */
const Logobook1 = '/images/Marinist/Logobook/Marinist-logobook_1.jpg'
const Logobook2 = '/images/Marinist/Logobook/Marinist-logobook_2.jpg'
const Logobook3 = '/images/Marinist/Logobook/Marinist-logobook_3.jpg'
const Logobook4 = '/images/Marinist/Logobook/Marinist-logobook_4.jpg'
const Logobook5 = '/images/Marinist/Logobook/Marinist-logobook_5.jpg'
const Logobook6 = '/images/Marinist/Logobook/Marinist-logobook_6.jpg'
const Logobook7 = '/images/Marinist/Logobook/Marinist-logobook_7.jpg'
const Logobook8 = '/images/Marinist/Logobook/Marinist-logobook_8.jpg'
const Logobook9 = '/images/Marinist/Logobook/Marinist-logobook_9.jpg'
const Logobook10 = '/images/Marinist/Logobook/Marinist-logobook_10.jpg'
const Logobook11 = '/images/Marinist/Logobook/Marinist-logobook_11.jpg'
const Logobook12 = '/images/Marinist/Logobook/Marinist-logobook_12.jpg'

export const MarinistLogobook = [
  Logobook1,
  Logobook2,
  Logobook3,
  Logobook4,
  Logobook5,
  Logobook6,
  Logobook7,
  Logobook8,
  Logobook9,
  Logobook10,
  Logobook11,
  Logobook12
]

export const MarinistAboutInfo = [
  'Type something',
  'Type something',
  'Type something',
  'Type something',
  'Type something',
  'Type something'
]

export const MarinistColors = [
  {
    hex: '#493a33',
    textColor: '#fff',
    name: 'Темно-коричневый',
    fullName: 'PANTONE 7533 c',
    CMYK: 'CMYK: 48, 61, 61, 65%'
  },
  {
    hex: '#73b7c6',
    textColor: '#000',
    name: 'Морской синий',
    fullName: 'PANTONE 7458 C',
    CMYK: 'CMYK: 68, 2, 23, 0%'
  },
  {
    hex: '#055e70',
    textColor: '#fff',
    fullName: 'PANTONE 7470 C',
    name: 'Темная морская волна',
    CMYK: 'CMYK: 100, 38, 40, 27%'
  }
]

export const MarinistFonts = [
  {
    fontWeight: 'Medium',
    fontName: 'Montserrat',
    letters: [ FontExample1, FontExample2 ],
    fontTitle: 'Основной шрифт логотипа и сайт'
  },
  {
    fontWeight: 'Regular',
    fontName: 'Monique Script',
    letters: [ FontExample3, FontExample4 ],
    fontTitle: 'Дополнительный шрифт логотипа'
  }
]

export const BrandingInfo = [
  'Type something',
  'Type something',
  'Type something',
  'Type something',
  'Type something',
  'Type something'
]

export const MarinistSlides = [
  { img: SlideImage }
]

export const AboutSiteInfo = [
  'Type something',
  'Type something',
  'Type something',
  'Type something',
  'Type something',
  'Type something'
]

export const Pages = [
  {
    img: SelectionPage,
    name: 'Секции',
    desc: 'С помощью интерактивного интерфейса можно выбрать этаж, кликая на изображение здания и ознакомившись с ' +
      'планировкой этажа выбрать квартиру.'
  },
  {
    img: ApartmentSelection,
    name: 'Квартиры',
    desc: 'Для каждой квартиры мы подготовили планировки, которые выделяются при наведения курсора мыши на квартиру.'
    
  },
  {
    img: SelectionByParameters,
    name: 'Параметры',
    desc: 'Дополнительный фильтр по параметрам позволяет клиенту подобрать жилье соответствующее его четким запросам.'
  }
]
