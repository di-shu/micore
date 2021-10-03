import React from 'react'
import styled from 'styled-components'
import { Blob } from './Blob'
import { AnimationClass } from '../../Helpers'

const Apollo = '/images/BlobAnimation/Apollo.png?trace'
const Mask = '/images/BlobAnimation/ApolloMask.svg?trace'
const Blob1 = '/images/BlobAnimation/Blob1.svg?trace'
const Blob2 = '/images/BlobAnimation/Blob2.svg?trace'
const Blob3 = '/images/BlobAnimation/Blob3.svg?trace'
const Blob4 = '/images/BlobAnimation/Blob4.svg?trace'
const Blob5 = '/images/BlobAnimation/Blob5.svg?trace'
const Blob6 = '/images/BlobAnimation/Blob6.svg?trace'
const Blob7 = '/images/BlobAnimation/Blob7.svg?trace'
/**/

const Blobs = [Blob1, Blob2, Blob3, Blob4, Blob5, Blob6, Blob7]

const BlobsWrap = styled.div`
  isolation: isolate;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mix-blend-mode: difference;
  mask-image: url(${props => props.mask});
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: 100% 100%;
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
