import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const easing = [0.64, 0.04, 0.35, 1]
const variants = {
  exit: { opacity: 0, transition: { duration: 1, ease: easing } },
  visible: { opacity: 1, transition: { duration: 1, ease: easing } },
  hidden: { opacity: 0, transition: { duration: 1, ease: easing } }
}

export const MainWrapper = ({ id, children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])
  
  return (
    <main id={id} className="main-wrapper">
      <motion.div
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    </main>
  )
}
