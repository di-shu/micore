import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Layout } from './Layout'
import { FooterSection } from '../Sections'
import { useCheckBottom } from '../../Helpers'

const easing = [0.64, 0.04, 0.35, 1]
const variants = {
  exit: { opacity: 0, transition: { duration: 1, ease: easing } },
  visible: { opacity: 1, transition: { duration: 1, ease: easing } },
  hidden: { opacity: 0, transition: { duration: 1, ease: easing } }
}

export const MainWrapper = ({ id, children }) => {
  const { pathname } = useRouter()
  const isBottom = useCheckBottom()
  const isProject = pathname.includes('/projects')
  const isServices = pathname.includes('/services')
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
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
          {children}
          {(isProject || isServices) && <FooterSection isBottom={isBottom} />}
        </motion.div>
      </main>
    </Layout>
  )
}
