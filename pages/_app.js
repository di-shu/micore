import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyle } from '../src/Components/Config'

export default ({ Component, pageProps, router }) => {
  return (
    <>
      <GlobalStyle/>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}
