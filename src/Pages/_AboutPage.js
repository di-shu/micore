import React, { useState } from 'react'
import { FooterSection } from '../Components/Sections'
import { FullPageWrapper, SeeMoreLink, ScrollBox } from '../Components'
import { AboutMain, Skills, AboutTeam } from '../Components/Sections/AboutPage'
/* STYLES */
import '~/Styles/Pages/about.scss'

const AboutSections = [
  { name: 'about-main', status: false, Component: AboutMain },
  { name: 'skills', status: false, Component: Skills },
  { name: 'team', status: false, Component: AboutTeam },
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
  
  return (
    <>
      <SeeMoreLink nav="/portfolio" className="on-first-load on-team-section" display={options.index === 2} />
      <ScrollBox className={options.index > 0 ? 'is-black' : ''}/>
      <FullPageWrapper
        options={options}
        sections={sections}
        setOptions={setOptions}
        setSections={setSections}
      />
    </>
  )
}
