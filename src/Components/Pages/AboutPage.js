import React, { useState } from 'react'
import { FooterSection } from '../Sections'
import { useDeviceDetect } from '../../Helpers'
import { FullPageWrapper, ScrollBox } from '../index'
import { AboutMain } from '../Sections/AboutPage' //AboutTeam, Skills
import '../../Styles/Pages/about.scss'

const AboutSections = [
  { name: 'about-main', status: true, Component: AboutMain },
  // { name: 'skills', status: false, Component: Skills },
  // { name: 'team', status: false, Component: AboutTeam },
  { name: 'about-footer', status: false, Component: FooterSection }
]

const Options = {
  index: 0,
  firstLoad: true,
  isLast: false
}

export const AboutPage = () => {
  const [options, setOptions] = useState(Options)
  const [sections, setSections] = useState(AboutSections)
  const { mobile } = useDeviceDetect()

  return (
    <>
      <ScrollBox
        isBlack={mobile || options.index > 0}
        className={options.index !== sections.length - 1 ? 'd-block' : 'd-none'}
      />
      <FullPageWrapper
        options={options}
        sections={sections}
        setOptions={setOptions}
        setSections={setSections}
      />
    </>
  )
}
