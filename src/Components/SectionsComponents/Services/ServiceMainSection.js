import React from 'react'
import dynamic from 'next/dynamic'
import { ScrollBox } from '../ScrollBox'
import ReactHtmlParser from 'react-html-parser'
import { draw, setup, useDeviceDetect } from '../../../Helpers'
import { ImageWrapper, MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const SectionHeader = ({ statue, options }) => {
  const { desktop } = useDeviceDetect()

  return (
    <>
      <MyScrollAnimation delay={[400]}>
        <ImageWrapper isDot/>
      </MyScrollAnimation>
      {desktop ? (
        <MyScrollAnimation animationName="fadeIn" delay={[600]}>
          <Sketch setup={setup(options)} draw={draw} className="section-image-wrap main-statue"/>
        </MyScrollAnimation>
      ) : (
        <MyScrollAnimation animationName="fadeIn" delay={[600]}>
          <ImageWrapper src={statue} className="main-statue"/>
        </MyScrollAnimation>
      )}
      <ScrollBox/>
    </>
  )
}

export const ServiceMainSection = ({ title, desc, statue, statueParams }) => {
  return (
    <SectionLayout id="service-main-section" Footer={() => <SectionHeader statue={statue} options={statueParams}/>}>
      <MyScrollAnimation delay={[0, 200]}>
        <SectionTitle title={title} main isContentWhite/>
        <SectionDesc isContentWhite children={ReactHtmlParser(desc)}/>
      </MyScrollAnimation>
    </SectionLayout>
  )
}
