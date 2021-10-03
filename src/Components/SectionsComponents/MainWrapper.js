import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Portfolios } from '../Config'
import { FooterSection } from '../Sections'
import { getPathname } from '../../Helpers'
import { ProjectsNavigation } from './Projects'
import { MyScrollAnimation } from './MyScrollAnimation'
import '../../Styles/Static/general.scss'
import '../../Styles/Includes/index.scss'
import '../../Styles/Sections/Services/index.scss'
import '../../Styles/Sections/Projects/index.scss'

export const MainWrapper = ({ id, children }) => {
  const easing = [0.64, 0.04, 0.35, 1]
  const variants = {
    exit: { opacity: 0, transition: { duration: 1, ease: easing } },
    visible: { opacity: 1, transition: { duration: 1, ease: easing } },
    hidden: { opacity: 0, transition: { duration: 1, ease: easing } }
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 })
    }, 100)
  }, [])

  return (
    <>
      <main id={id} className="main-wrapper">
        <motion.div
          exit="exit"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <ProjectsNavigation links={Portfolios.getALl()}/>
          {children}
          {(getPathname().isProject || getPathname().isServices) && (
            <MyScrollAnimation animationName="fadeIn" offset={300}>
              <FooterSection animation/>
            </MyScrollAnimation>
          )}
        </motion.div>
      </main>
    </>
  )
}
