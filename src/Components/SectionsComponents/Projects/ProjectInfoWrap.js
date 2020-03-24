import React from 'react'

export const ProjectInfoWrap = ({ name, year, link, children, isProjectInfo }) => {
  return (
    <div className={`square-info-wrap ${isProjectInfo ? 'project-wrap' : 'content-wrap'}`}>
      <div className="square-text-wrap">
        {isProjectInfo ? (
          <>
            <p className="square-info-text">Name - {name}</p>
            <p className="square-info-text">Year - {year}</p>
            <p className="square-info-text">Link - <a target="_blank" rel="noopener noreferrer" href={`http://${link}`}>{link}</a></p>
          </>
        ) : children}
      </div>
    </div>
  )
}
