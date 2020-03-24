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
const Plan = '/Assets/Images/VladyDesign/VladyPlanLook.png'
const Pages = '/Assets/Images/VladyDesign/VladyPagesLook.png'
const Flowers = '/Assets/Images/VladyDesign/VladyFlowers.png'
const VladyMac = '/Assets/Images/VladyDesign/VladyMacLook.png'
const Mobile = '/Assets/Images/VladyDesign/VladyMobileLook.png'
const VladyTablet = '/Assets/Images/VladyDesign/VladyTabletLook.png'
const VladyDesktop = '/Assets/Images/VladyDesign/VladyDesktopLook.png'
const ShadowFlowers = '/Assets/Images/VladyDesign/VladyFlowersWithShadow.png'

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
