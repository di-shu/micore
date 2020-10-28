import React from 'react'
import { TabWrap } from '../../Tab'
import { Portfolios } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { ActiveLink } from '../../SectionsComponents'
import { SectionWrapper } from '~/Components/SectionsComponents'
/* STYLES */
import '~/Styles/Pages/portfolio.scss'
import '~/Styles/Sections/Home/portfolio.scss'

export const HomePortfolio = ({ animation, isPortfolio }) => {
  return (
    <section id="portfolio-section" className="section">
      <SectionWrapper>
        <TabWrap tabs={isPortfolio ? Portfolios.getTabs() : Portfolios.getSlicedTabs()} animation={animation}/>
        {!isPortfolio && (
          <div className={AnimationClass({ animation, className: 'link-wrap' })}>
            <ActiveLink link="/portfolio" className="see-all-link">смотреть все</ActiveLink>
          </div>
        )}
      </SectionWrapper>
    </section>
  )
}
