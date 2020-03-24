import React from 'react'
import dynamic from 'next/dynamic'
import { ScrollBox } from '../ScrollBox'
import { draw, setup, useDeviceDetect } from '../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const SectionHeader = (statue) => () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <ScrollBox />
      <ImageWrapper isDot />
      {desktop ? (
        <Sketch setup={setup(statue)} draw={draw} className="section-image-wrap main-statue"/>
      ) : (
        <ImageWrapper src={statue} className="main-statue" />
      )}
    </>
  )
}

export const ServiceMainSection = ({ title, desc, statue }) => {
  return (
    <SectionLayout id="service-main-section" Header={SectionHeader(statue)}>
      <SectionTitle title={title} main isContentWhite />
      <SectionDesc isContentWhite children={desc} />
    </SectionLayout>
  )
}
