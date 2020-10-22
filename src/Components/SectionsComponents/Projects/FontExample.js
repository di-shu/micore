import React from 'react'

export const FontExample = ({ fonts }) => {
  return fonts.map((font, index) => {
    return (
      <div key={index} className="d-flex flex-column" style={{ marginBottom: index === 0 ? 27 : 0 }}>
        <p className="font-example-title">{font.fontTitle}</p>
        <div className="font-name-row d-flex justify-content-between align-items-center">
          <p className="font-name">{font.fontName}</p>
          <p className="font-weight">{font.fontWeight}</p>
        </div>
        <div>
          {font.letters.map((letter, index) => (
            <img key={index} src={letter} alt="Font"/>
          ))}
        </div>
      </div>
    )
  })
}
