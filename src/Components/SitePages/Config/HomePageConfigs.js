import { FooterSection } from '../../Sections'
import { HomeAbout, HomeMain, HomePortfolio, HomeServices } from '../../Sections/HomePage'

export const Options = {
  index: 0,
  firstLoad: true,
  isLast: false
}

export const MainSections = [
  { name: 'main', status: false, Component: HomeMain },
  { name: 'about', status: false, Component: HomeAbout },
  { name: 'services', status: false, Component: HomeServices },
  { name: 'portfolio', status: false, Component: HomePortfolio },
  { name: 'footer', status: false, Component: FooterSection }
]
