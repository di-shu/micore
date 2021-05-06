import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { TabWrap } from '../../Tab'
import { Portfolios } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { ActiveLink, SectionWrapper } from '../../SectionsComponents'
import '../../../Styles/Pages/portfolio.scss'
import '../../..//Styles/Sections/Home/portfolio.scss'

export const HomePortfolio = ({ animation, isPortfolio}) => {
  const { t } = useTranslation('common')

  return (
    <section id="portfolio-section" className="section">
      <SectionWrapper>
        <TabWrap
          animation={animation}
          tabs={isPortfolio ?
            Portfolios.getTabs(t) :
            Portfolios.getSlicedTabs(6, t)}
        />
        {!isPortfolio && (
          <div className={AnimationClass({ animation, className: 'link-wrap' })}>
            <ActiveLink link="/portfolio" className="see-all-link">смотреть все</ActiveLink>
          </div>
        )}
      </SectionWrapper>
    </section>
  )
}
