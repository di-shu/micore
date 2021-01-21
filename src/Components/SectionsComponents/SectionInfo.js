import React from 'react'

export const SectionTitle = (props) => {
  const { title, children, main = false, className, isContentWhite, display = true } = props
  const customClassName = `section-title ${className ? className : ''} ${isContentWhite ? 'is-white' : ''}`
  
  return display && main ? (
    <h1 className={customClassName} children={title || children}/>
  ) : (
    <h6 className={customClassName} children={title || children}/>
  )
}

export const SectionDesc = (props) => {
  const { children, withDot, className, isContentWhite, display = true } = props
  const FloatText = 'Прошло три года с момента старта разработки нашего бренда. И вот 2020й, официальный запуск нашего сайта и соц. сетей.\n' +
      'Мы хотим рассказать сторителлинг и показать как мы создали себя. Показать наш длинный путь в три года и поделиться нашими эмоциями. We are MantiCore Development.'
  const customClassName = `section-desc ${className ? className : ''} ${withDot ? 'with-dot' : ''} ${isContentWhite ? 'is-white' : ''}`
  
  return display && (
    <p className={customClassName} children={children ? children : FloatText}/>
  )
}
