import React from 'react'
import { AnimatePresence } from 'framer-motion'

export default ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}
