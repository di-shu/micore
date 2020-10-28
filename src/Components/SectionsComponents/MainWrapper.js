import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Layout } from './Layout'
import { Portfolios } from '../Config'
import { FooterSection } from '../Sections'
import { useCheckRoute } from '../../Helpers'
import { ProjectsNavigation } from './Projects'
import { MyScrollAnimation } from './MyScrollAnimation'
/* STYLES */
import '~/Styles/Static/general.scss'
import '~/Styles/Includes/index.scss'
import '~/Styles/Sections/Services/index.scss'
import '~/Styles/Sections/Projects/index.scss'

const easing = [0.64, 0.04, 0.35, 1]
const variants = {
  exit: { opacity: 0, transition: { duration: 1, ease: easing } },
  visible: { opacity: 1, transition: { duration: 1, ease: easing } },
  hidden: { opacity: 0, transition: { duration: 1, ease: easing } }
}

export const MainWrapper = ({ id, children }) => {
  const { isProject, isServices } = useCheckRoute()
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 })
    }, 100)
  }, [])

  return (
    <Layout>
      <main id={id} className="main-wrapper">
        <motion.div
          exit="exit"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <ProjectsNavigation links={Portfolios.getALl()}/>
          {children}
          {(isProject || isServices) && (
            <MyScrollAnimation animationName="fadeIn" offset={300}>
              <FooterSection animation/>
            </MyScrollAnimation>
          )}
        </motion.div>
      </main>
    </Layout>
  )
}
