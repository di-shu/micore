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
const Video = '/images/VladyDesign/vlady_video.mp4'
const Plan = '/images/VladyDesign/VladyPlanLook.jpg'
const Pages = '/images/VladyDesign/VladyPagesLook.png'
const Flowers = '/images/VladyDesign/VladyFlowers.png'
const VladyMac = '/images/VladyDesign/VladyMacLook.jpg'
const Mobile = '/images/VladyDesign/VladyMobileLook.jpg'
const VladyTablet = '/images/VladyDesign/VladyTabletLook.jpg'
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
        <SectionDesc className="plan-desc">
          Ещё одним этапом была разработка адаптивного дизайна под большинство устройств.
          Также мы отдельно проработали подход к анимациям под телефоны и планшетны.
          Всё для достижения максимально вау-эффекта с какого места бы не зашёл пользователь.
        </SectionDesc>
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
      Header={() => <div className="desktop-view"><video autoPlay="autoPlay" loop="loop" preload="auto" muted="muted" src={Video}/></div>}
    >
      <SectionTitle title="Главная страница"/>
      <SectionDesc>
        При заходе на главную страницу визуальный фокус сосредоточен на анимированном логотипе студии.
        Такой эффект работает прежде всего на узнаваемость бренда. Также страница знакомит клиента с компанией,
        ее услугами и портфолио.
      </SectionDesc>
    </SectionLayout>
  )
}
