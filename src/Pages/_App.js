import React from 'react'
import { Layout } from '../routes'
import { AnimatePresence } from 'framer-motion'
/* STYLES */
import '../Styles/Static/fonts.scss'
import '../Styles/Includes/index.scss'
import '../Styles/Static/general.scss'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout {...pageProps}>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
