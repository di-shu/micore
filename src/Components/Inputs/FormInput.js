import React, { useState } from 'react'
import { MaskInput } from './MaskInput'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

export const FormInput = (props) => {
  const { value, id, handleChange, label, masked, handleChangeMask, className, rows, multiline } = props
  const [isFocus, setIsFocus] = useState({ phone: false, name: false })
  
  const handleFocus = (name) => () => {
    setIsFocus(prev => ({ ...prev, [name]: true }))
  }
  const handleBlur = (name) => () => {
    setIsFocus(prev => ({ ...prev, [name]: false }))
  }
  
  return masked ? (
    <FormControl className={`${isFocus[id] && 'is-focus'}`}>
      <Input
        id={id}
        value={value}
        onBlur={handleBlur(id)}
        onFocus={handleFocus(id)}
        inputComponent={MaskInput}
        onChange={handleChangeMask(id)}
      />
    </FormControl>
  ) : (
    <TextField
      id={id}
      rows={rows}
      label={label}
      value={value}
      multiline={multiline}
      onChange={handleChange}
      onBlur={handleBlur(id)}
      onFocus={handleFocus(id)}
      className={`${className} ${isFocus[id] && 'is-focus'}`}
    />
  )
}
