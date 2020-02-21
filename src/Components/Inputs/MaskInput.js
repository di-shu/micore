import React from 'react'
import MaskedInput from 'react-text-mask'

const mask = ['+', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]

export const MaskInput = (props) => {
  const { inputRef, ...other } = props
  
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      showMask
      mask={mask}
      placeholderChar={'_'}
    />
  )
}
