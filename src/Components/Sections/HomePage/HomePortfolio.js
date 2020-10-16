import React from 'react'
import { TabWrap } from '../../Tab'
import { ProjectsList } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { SectionWrapper } from '~/Components/SectionsComponents'
/* STYLES */
import '~/Styles/Pages/portfolio.scss'
import '~/Styles/Sections/Home/portfolio.scss'
import { ActiveLink } from '../../SectionsComponents'

export const HomePortfolio = ({ animation, isPortfolio }) => {
  return (
    <section id="portfolio-section" className="section">
      <SectionWrapper>
        <TabWrap tabs={ProjectsList} animation={animation} isSlice={isPortfolio}/>
        {!isPortfolio && (
          <div className={AnimationClass({ animation, className: 'link-wrap' })}>
            <ActiveLink link="/portfolio" className="see-all-link">смотреть все</ActiveLink>
          </div>
        )}
      </SectionWrapper>
    </section>
  )
}
