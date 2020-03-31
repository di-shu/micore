import React from 'react'
import Form from 'react-bootstrap/Form'
import InputMask from 'react-input-mask'

export const InputControl = ({ id, mask, placeholder, required, label, value, type = 'input', rows, display = true, onChange, ...props }) => {
  return display && (
    <Form.Group controlId={id} className={`input-groups ${type === 'textarea' ? 'input-area' : ''}`} {...props}>
      {mask ? (
        <InputMask mask={mask} value={value} onChange={onChange}>
          {(inputProps) => <Form.Control {...inputProps} type={type} value={value} required={required} className="input-control"/>}
        </InputMask>
      ) : (
        <Form.Control
          as={type}
          mask={mask}
          value={value}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          className="input-control"
          rows={type === 'textarea' ? rows : 1}
        />
      )}
      {label && <Form.Label className="input-label">{label}</Form.Label>}
      <hr className="input-line"/>
    </Form.Group>
  )
}
