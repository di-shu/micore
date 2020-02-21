import React, { useState } from 'react'
import { isBrowser } from 'react-device-detect'
import { AnimationClass } from '../Helpers'
import { FooterSection } from '../Components/Sections'
import {
  HomeMain,
  HomeAbout,
  HomeServices,
  HomePortfolio,
} from '../Components/Sections/HomePage'
import { SeeMoreLink, ImageWrapper, ScrollBox, FullPageWrapper } from '../Components'
/* STYLES */
import '../Styles/Pages/home.scss'

const MainSections = [
  { name: 'main', status: false, Component: HomeMain },
  { name: 'about', status: false, Component: HomeAbout },
  { name: 'services', status: false, Component: HomeServices },
  { name: 'portfolio', status: false, Component: HomePortfolio },
  { name: 'footer', status: false, Component: FooterSection }
]

const Options = {
  index: 0,
  firstLoad: true,
  isLast: false
}

export const HomePage = () => {
  const [options, setOptions] = useState(Options)
  const [sections, setSections] = useState(MainSections)
  
  return (
    <>
      <SeeMoreLink
        display={isBrowser}
        className={AnimationClass({
          firstLoad: options.firstLoad,
          animation: sections[0].status,
          className: `${options.index > 1 ? 'on-hidden' : ''}`
        })}
      />
      <ImageWrapper
        isDot
        display={isBrowser}
        className={AnimationClass({
          firstLoad: options.firstLoad,
          animation: sections[0].status,
          className: `${options.index > 1 ? 'on-hidden' : ''}`
        })}
      />
      <ScrollBox display={isBrowser} className={`${options.index > 1 ? 'on-hidden' : ''}`}/>
      <FullPageWrapper
        options={options}
        sections={sections}
        setOptions={setOptions}
        setSections={setSections}
      />
    </>
  )
}
