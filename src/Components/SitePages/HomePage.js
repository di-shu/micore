import React, { useState } from 'react'
import { FooterSection } from '../Sections'
import { AnimationClass, useDeviceDetect } from '../../Helpers'
import { SeeMoreLink, ImageWrapper, ScrollBox, FullPageWrapper } from '../index'
import { HomeMain, HomeAbout, HomeServices, HomePortfolio, } from '../Sections/HomePage'
/* STYLES */
import '../../Styles/Pages/home.scss'

export const HomePage = () => {
  const { desktop } = useDeviceDetect()
  const [options, setOptions] = useState(Options)
  const [sections, setSections] = useState(MainSections)
  
  return (
    <>
      <SeeMoreLink
        display={desktop}
        className={AnimationClass({
          firstLoad: options.firstLoad,
          animation: sections[0].status,
          className: `${options.index > 1 ? 'on-hidden' : ''}`
        })}
      />
      <ImageWrapper
        isDot
        display={desktop}
        className={AnimationClass({
          firstLoad: options.firstLoad,
          animation: sections[0].status,
          className: `${options.index > 1 ? 'on-hidden' : ''}`
        })}
      />
      <ScrollBox className={`${options.index > 1 ? 'on-hidden' : ''}`}/>
      <FullPageWrapper
        options={options}
        sections={sections}
        setOptions={setOptions}
        setSections={setSections}
      />
    </>
  )
}

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
