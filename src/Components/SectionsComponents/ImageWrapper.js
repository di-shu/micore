import React from 'react'
/*IMAGES*/
const Dots = '/Assets/Images/DotsGrey.png'

export const ImageWrapper = ({ className, src, alt, isDot = false, display = true, children, onClick }) => {
  return display && (
    <div className={`${isDot ? 'section-dots-wrap' : 'section-image-wrap'} ${className ? className : ''}`} onClick={onClick}>
      {children}
      <img src={isDot ? Dots : src} alt={isDot ? 'Dots' : alt ? alt : ''} />
    </div>
  )
}
