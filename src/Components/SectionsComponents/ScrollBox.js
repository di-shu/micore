import React, { useRef, useEffect } from 'react'
import { fadeUp, useDeviceDetect } from '../../Helpers'

export const ScrollBox = ({ firstLoad = true, isBlack, className, display, offset = 30, duration = 1, delay = 0 }) => {
  const { desktop } = useDeviceDetect()
  const scrollEl = useRef(null)

  useEffect(() => {
    // fadeUp(scrollEl.current, { offset, duration, delay }).play()
  }, [])

  return (display ? display : desktop) && (
    <div ref={scrollEl} className={`scroll-box ${className ? className : ''} ${firstLoad ? 'on-first-load' : ''} ${isBlack ? 'is-black' : ''}`}>
      <span/>
    </div>
  )
}
