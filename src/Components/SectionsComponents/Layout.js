import React, { useState } from 'react'
import { Header, MenuContainer, MetaHead } from '../SiteHeader'

export const Layout = ({ children }) => {
  return (
    <>
      <MetaHead/>
      <Header/>
      {children}
    </>
  )
}
