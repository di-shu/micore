import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { getRandomInt } from '../../Helpers'

export const Blob = ({ src, props, move }) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  useEffect(() => {
    const int = setInterval(() => {
      setX(getRandomInt(-10, 10))
      setY(getRandomInt(-10, 10))
    }, 1500)
    return () => {
      clearInterval(int)
    }
  }, [])
  
  return (
    <animated.img
      src={src}
      alt="Blob"
      className="blob-shape"
      style={{
        objectPosition: props.xy.interpolate(move),
        transform: `skew(${x}deg, ${y}deg)`
      }}
    />
  )
}
