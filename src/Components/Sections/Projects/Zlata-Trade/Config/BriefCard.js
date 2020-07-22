import React from 'react'
import { ImageWrapper } from '../../../../SectionsComponents'

export const BriefCard = ({ title, desc }) => {
  return (
    <div className="brief-card">
      <h2 className="brief-title">{title}</h2>
      <p className="brief-info">{desc}</p>
    </div>
  )
}
