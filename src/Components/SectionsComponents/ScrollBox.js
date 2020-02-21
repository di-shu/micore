import React from 'react'
import { isBrowser } from "react-device-detect"

export const ScrollBox = ({ display = isBrowser, firstLoad = true, isBlack, className }) => {
  return display && (
    <div className={`scroll-box ${className ? className : '' } ${firstLoad ? 'on-first-load' : ''} ${isBlack ? 'is-black' : ''}`}>
      <span/>
    </div>
  )
}
