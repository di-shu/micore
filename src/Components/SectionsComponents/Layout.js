import React from 'react'
import { Header, MetaHead } from '../SiteHeader'

export const Layout = ({ children }) => {
  return (
    <>
      <MetaHead/>
      <Header/>
      {children}
    </>
  )
}
