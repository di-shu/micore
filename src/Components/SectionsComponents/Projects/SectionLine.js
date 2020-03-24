import React from 'react'

export const SectionLine = ({ direction, display = true }) => display && (
  <span className={`section-line ${direction ? direction : ''}`} />
)
