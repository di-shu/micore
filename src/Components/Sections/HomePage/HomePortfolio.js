import React from 'react'
import Link from 'next/link'
import { TabWrap } from '../../Tab'
import { ProjectsList } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { SectionWrapper } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Pages/portfolio.scss'
import '~/Styles/Pages/Sections/Home/portfolio.scss'

export const HomePortfolio = ({ animation, isPortfolio }) => {
  return (
    <section id="portfolio-section" className="section">
      <SectionWrapper>
        <TabWrap tabs={ProjectsList && ProjectsList} animation={animation} isSlice={isPortfolio}/>
        {!isPortfolio && (
          <div className={AnimationClass({ animation, className: 'link-wrap' })}>
            <Link href="/portfolio">
              <a className="see-all-link">see all</a>
            </Link>
          </div>
        )}
      </SectionWrapper>
    </section>
  )
}
