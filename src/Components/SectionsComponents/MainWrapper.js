import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ProjectsList } from '../Config'
import { FooterSection } from '../Sections'
import { Layout } from './Layout'
import { ProjectsNavigation } from './Projects'
/* STYLES */
import 'src/Styles/Sections/Services/index.scss'
import '~/Styles/Sections/Projects/index.scss'

const easing = [0.64, 0.04, 0.35, 1]
const variants = {
  exit: { opacity: 0, transition: { duration: 1, ease: easing } },
  visible: { opacity: 1, transition: { duration: 1, ease: easing } },
  hidden: { opacity: 0, transition: { duration: 1, ease: easing } }
}

export const MainWrapper = ({ id, children }) => {
  const { pathname } = useRouter()
  const isProject = pathname.includes('/projects')
  const isServices = pathname.includes('/services')
  
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
          {isProject && <ProjectsNavigation links={ProjectsList[0].content}/>}
          {children}
          {(isProject || isServices) && <FooterSection />}
        </motion.div>
      </main>
    </Layout>
  )
}
