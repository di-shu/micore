import React from 'react'
import dynamic from 'next/dynamic'
import { ScrollBox } from '../ScrollBox'
import { draw, setup, useDeviceDetect } from '../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const SectionHeader = (statue, proportions) => () => {
  const { desktop } = useDeviceDetect()

  return (
    <>
      <ScrollBox/>
      <ImageWrapper isDot/>
      {desktop ? (
        <Sketch setup={setup(statue, proportions)} draw={draw} className="section-image-wrap main-statue"/>
      ) : (
        <ImageWrapper src={statue} className="main-statue"/>
      )}
    </>
  )
}

export const ServiceMainSection = ({ title, desc, statue, isProportions }) => {
  return (
    <SectionLayout id="service-main-section" Header={SectionHeader(statue, isProportions)}>
      <SectionTitle title={title} main isContentWhite/>
      <SectionDesc isContentWhite children={desc}/>
    </SectionLayout>
  )
}
