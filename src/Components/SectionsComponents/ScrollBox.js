import React from 'react'
import { useDeviceDetect } from '../../Helpers'

export const ScrollBox = ({ firstLoad = true, isBlack, className }) => {
  const { desktop } = useDeviceDetect()
  
  return desktop && (
    <div className={`scroll-box ${className ? className : ''} ${firstLoad ? 'on-first-load' : ''} ${isBlack ? 'is-black' : ''}`}>
      <span/>
    </div>
  )
}
