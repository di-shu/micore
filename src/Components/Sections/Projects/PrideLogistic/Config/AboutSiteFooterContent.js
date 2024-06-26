import React from 'react'
import { useDeviceDetect } from '../../../../../Helpers'
import { ImageWrapper, SectionWrapper } from '../../../../SectionsComponents'

const MacAbout = '/images/PrideLogistic/MacAbout.png'
const PrideMenu = '/images/PrideLogistic/SiteMenu.png'
const SitePages = '/images/PrideLogistic/Pages.png'
const SitePagesMobile = '/images/PrideLogistic/SitePagesMobile.png'

export const AboutSiteBottomContent = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <>
      <div className="site-on-mac-wrap">
        <SectionWrapper className="mac-wrapper" noPadding>
          <ImageWrapper src={MacAbout}/>
          <div className="about-list">
            <div className="about-list-item">
              <span className="list-item-text">Type something</span>
              <div className="line-wrap">
                <span className="line"/>
                <span className="circle"/>
              </div>
            </div>
            <div className="about-list-item">
              <span className="list-item-text">Type something</span>
              <div className="line-wrap">
                <span className="line"/>
                <span className="circle"/>
              </div>
            </div>
            <div className="about-list-item">
              <span className="list-item-text">Type something</span>
              <div className="line-wrap">
                <span className="line"/>
                <span className="circle"/>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="how-to-menu-wrap">
        <ImageWrapper isDot className="to-left"/>
        <ImageWrapper isDot className="to-right"/>
        <ImageWrapper src={PrideMenu}/>
      </div>
      <div className="inner-pages-wrap">
        <ImageWrapper src={MacAbout} className="lion-image"/>
        <ImageWrapper src={mobile ? SitePagesMobile : SitePages} className="inner-pages-image"/>
      </div>
    </>
  )
}
