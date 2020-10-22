/* IMAGES */
const OtherImage = '/images/Services/Other.png'
const BrandingImage = '/images/Services/Branding.png'
const CorporateImage = '/images/Services/Corporate.png'
const LandingImage = '/images/Services/LandingImage.png'

export const ServicesList = [
  {
    img: LandingImage,
    name: 'Landing page',
    link: '/services/landing',
    desc: 'Целевая страница, где мы расскажем о преимуществах вашего товара или услуги'
  },
  {
    img: CorporateImage,
    name: 'Corporate Web-site',
    link: '/services/corporate',
    desc: 'Сайты для бизнеса любого масштаба, решающие амбициозные бизнес-задачи'
  },
  {
    name: 'Branding',
    img: BrandingImage,
    link: '/services/brand',
    desc: 'Полный цикл по созданию цельного брендинга компании в онлайне и офлайне'
  },
  {
    name: 'Other',
    img: OtherImage,
    link: '/services/other',
    desc: 'Интернет-магазины, порталы, CRM системы, логистики и другие сложные продукты'
  }
]
