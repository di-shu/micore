import React from 'react'
import { useDeviceDetect } from '../../Helpers'

export const ScrollBox = ({ firstLoad = true, isBlack, className, display }) => {
  const { desktop } = useDeviceDetect()

  return (display ? display : desktop) && (
    <div className={`scroll-box ${className ? className : ''} ${firstLoad ? 'on-first-load' : ''} ${isBlack ? 'is-black' : ''}`}>
      <span/>
    </div>
  )
}
