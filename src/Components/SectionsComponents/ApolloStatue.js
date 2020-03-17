import React from 'react'
import styled from 'styled-components'
import { Blob } from './Blob'
import { AnimationClass } from '../../Helpers'
/* IMAGES */
const Apollo = '/Assets/Images/BlobAnimation/Apollo.png'
const Mask = '/Assets/Images/BlobAnimation/ApolloMask.svg'
const Blob1 = '/Assets/Images/BlobAnimation/Blob1.svg'
const Blob2 = '/Assets/Images/BlobAnimation/Blob2.svg'
const Blob3 = '/Assets/Images/BlobAnimation/Blob3.svg'
const Blob4 = '/Assets/Images/BlobAnimation/Blob4.svg'
const Blob5 = '/Assets/Images/BlobAnimation/Blob5.svg'
const Blob6 = '/Assets/Images/BlobAnimation/Blob6.svg'
const Blob7 = '/Assets/Images/BlobAnimation/Blob7.svg'
/**/

const Blobs = [Blob1, Blob2, Blob3, Blob4, Blob5, Blob6, Blob7]

const BlobsWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mix-blend-mode: color;
  mask-image: url(${props => props.mask});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
`

export const ApolloStatue = ({ props, move, firstLoad, animation, display = true }) => {
  return display && (
    <div className={AnimationClass({ firstLoad, animation, className: 'statue-wrap' })}>
      <img src={Apollo} className="statue" alt="Apollo"/>
      <BlobsWrap mask={Mask}>
        {Blobs.map((blob, index) => <Blob key={index} src={blob} move={move} props={props} />)}
      </BlobsWrap>
    </div>
  )
}
