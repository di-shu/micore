import React, {useEffect, useState, useRef} from 'react'
import {draw, setup, useDeviceDetect} from '../../../../Helpers'
import { ImageWrapper, ProjectMainSection } from '../../../SectionsComponents'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })
/*IMAGES*/
const MainStatue = '/images/Manticore/MainStatue.png'

const opt = {
  statueW: 610,
  statueH: 840,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0,
  bg: '#fff'
}

const optMobile = {
  statueW: 350,
  statueH: 480,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0,
  bg: '#fff'
}


const MainSectionFooterContent = () => {
  const { mobile} = useDeviceDetect()

  return (
      <div className="section-image-wrap main-statue">
        {mobile ? <img src={MainStatue} alt="statue"/> : <Sketch setup={setup(opt)} draw={draw}/> }
      </div>
  )
}

export const Main = () => {
  return (
    <ProjectMainSection id="manticore" name="Manticore" glitch={MainSectionFooterContent} isContentWhite/>
  )
}
