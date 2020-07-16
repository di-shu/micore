import React from 'react'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  SectionWrapper,
  BottomNavigation
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const Plan = '/images/VladyDesign/VladyPlanLook.png'
const Pages = '/images/VladyDesign/VladyPagesLook.png'
const Flowers = '/images/VladyDesign/VladyFlowers.png'
const VladyMac = '/images/VladyDesign/VladyMacLook.png'
const Mobile = '/images/VladyDesign/VladyMobileLook.png'
const VladyTablet = '/images/VladyDesign/VladyTabletLook.png'
const VladyDesktop = '/images/VladyDesign/VladyDesktopLook.png'
const ShadowFlowers = '/images/VladyDesign/VladyFlowersWithShadow.png'

const VladyDesignFooterContent = () => {
  const { desktop } = useDeviceDetect()

  return (
    <>
      <ImageWrapper src={VladyMac} className="mac-view"/>
      <div className="section-with-lines">
        <SectionWrapper children={<span/>}/>
        <ImageWrapper src={VladyTablet} className="tablet-view"/>
        <div className="plan-wrap">
          <ImageWrapper src={!desktop ? Flowers : ShadowFlowers} className="flowers"/>
          <ImageWrapper src={Plan} className="plan-view"/>
        </div>
        <SectionDesc className="plan-desc"/>
        <ImageWrapper src={Pages} className="pages-view"/>
        <ImageWrapper src={Mobile} className="mobile-view"/>
        <BottomNavigation/>
      </div>
    </>
  )
}

export const HomePage = () => {
  return (
    <SectionLayout
      id="vlady-homepage"
      Footer={VladyDesignFooterContent}
      Header={() => <ImageWrapper src={VladyDesktop} className="desktop-view"/>}
    >
      <SectionTitle title="Home page"/>
      <SectionDesc/>
    </SectionLayout>
  )
}
