import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Header } from '../src/Components'

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Header/>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps}/>
      </AnimatePresence>
    </>
  )
}

export default App
