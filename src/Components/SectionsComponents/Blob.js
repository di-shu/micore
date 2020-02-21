import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { getRandomInt } from '../../Helpers'

const StyledBlob = styled(animated.img)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 1.5s cubic-bezier(0.64, 0.04, 0.35, 1);
`

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
    <StyledBlob
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
