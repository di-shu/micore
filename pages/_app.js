import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyle } from '~/Components/Config'

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <GlobalStyle/>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps}/>
      </AnimatePresence>
    </>
  )
}

export default appWithTranslation(App)
