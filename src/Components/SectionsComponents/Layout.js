import React from 'react'
import { useRouter } from 'next/router'
import { useCheckBottom } from '../../Helpers'
import { FooterSection } from '../Sections'
import { Header, MetaHead } from '../SiteHeader'

export const Layout = ({ children }) => {
  const { pathname } = useRouter()
  const isBottom = useCheckBottom()
  const isProject = pathname.includes('/projects')
  const isServices = pathname.includes('/services')
  
  return (
    <div className="page-wrapper">
      <MetaHead/>
      <Header/>
      <div className="content-wrapper">
        {children}
        {(isServices || isProject) && <FooterSection isBottom={isBottom}/>}
      </div>
    </div>
  )
}
