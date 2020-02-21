import React from 'react'
import Form from 'react-bootstrap/Form'

export const InputControl = ({ id, label, value, type = 'input', rows, display = true, onChange }) => {
  return display && (
    <Form.Group controlId={id} className={`input-groups  ${type === 'textarea' ? 'input-area' : ''}`}>
      <Form.Control
        as={type}
        value={value}
        onChange={onChange}
        className="input-control"
        rows={type === 'textarea' ? rows : 1}
      />
      <Form.Label className="input-label">{label}</Form.Label>
      <hr className="input-line"/>
    </Form.Group>
  )
}
