import React from 'react'

export const SectionTitle = ({ title, children, main = false, className, isContentWhite, display = true }) => {
  const customClassName = `section-title${className ? ` ${className}` : ''}${isContentWhite ? ' is-white' : ''}`
  
  return display && main ? (
    <h1 className={customClassName} children={title || children}/>
  ) : (
    <h6 className={customClassName} children={title || children}/>
  )
}

export const SectionDesc = ({ children, withDot, className, isContentWhite, display = true }) => {
  const FloatText = 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum' +
    ' dolo rez eu fugia nulla pariatur.'
  const customClassName = `section-desc${className ? ` ${className}` : ''}${withDot ? ' with-dot' : ''}${isContentWhite ? ' is-white' : ''}`
  
  return display && (
    <p className={customClassName} children={children ? children : FloatText}/>
  )
}
