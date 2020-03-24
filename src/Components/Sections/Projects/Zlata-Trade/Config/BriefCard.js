import React from 'react'
import { ImageWrapper } from '../../../../SectionsComponents'

export const BriefCard = ({ title, desc, img }) => {
  return (
    <div className="brief-card">
      <h2 className="brief-title">{title}</h2>
      <p className="brief-info">{desc}</p>
      <ImageWrapper src={img} className="brief-image-wrap" />
    </div>
  )
}
