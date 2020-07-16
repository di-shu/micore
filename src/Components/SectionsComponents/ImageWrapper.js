import React from 'react'
/*IMAGES*/
const Dots = '/images/DotsGrey.png'

export const ImageWrapper = (props) => {
  const { animate, className, src, alt, isDot = false, display = true, children, onClick } = props
  
  return display && (
    <div className={`${animate ? 'animate' : ''} ${isDot ? 'section-dots-wrap' : 'section-image-wrap'} ${className ? className : ''}`} onClick={onClick}>
      {children}
      <img src={`${isDot ? Dots : src}?trace`} alt={isDot ? 'Dots' : alt ? alt : ''} />
    </div>
  )
}
