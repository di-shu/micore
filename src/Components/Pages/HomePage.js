import React, { useState } from 'react'
import { FullPageWrapper } from '../FullPage'
import { AnimationClass, useDeviceDetect } from '../../Helpers'
import { SeeMoreLink, ImageWrapper, ScrollBox } from '../SectionsComponents'
import { MainSections, Options } from './Config/HomePageConfigs'
/* STYLES */
import '~/Styles/Pages/home.scss'

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
