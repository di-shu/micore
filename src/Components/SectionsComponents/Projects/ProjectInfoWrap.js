import React from 'react'

export const ProjectInfoWrap = ({ name, year, link, children, isProjectInfo }) => {
  return (
    <div className={`square-info-wrap ${isProjectInfo ? 'project-wrap' : 'content-wrap'}`}>
      <div className="square-text-wrap">
        {isProjectInfo ? (
          <>
            {name && <p className="square-info-text">Имя - {name}</p>}
            {year && <p className="square-info-text">Год - {year}</p>}
            {link && <p className="square-info-text">Ссылка - <a target="_blank" className="square-info-wrap__link" rel="noopener noreferrer" href={`http://${link}`}>{link}</a></p>}
          </>
        ) : children}
      </div>
    </div>
  )
}
