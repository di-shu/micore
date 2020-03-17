import React from 'react'
import { AnimatePresence } from 'framer-motion'
/* STYLES */
import '~/Styles/Static/fonts.scss'
import '~/Styles/Includes/index.scss'
import '~/Styles/Static/general.scss'

export default ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}
