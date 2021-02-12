import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import {useDeviceDetect} from "../../Helpers"


export const FullPageWrapper = (props) => {
  const { sections, options, setSections, setOptions } = props
    const { mobile } = useDeviceDetect()
  
  const sectionMove = (origin, destination) => {
    setSections(prev => {
      if (destination.index !== sections.length - 1) {
        setOptions({ isLast: false, firstLoad: false, index: destination.index })
        prev[origin.index].status = false
        prev[destination.index].status = true
      } else {
        setOptions({ isLast: true, firstLoad: false, index: destination.index })
        prev[destination.index].status = true
      }
      
      return [...prev]
    })
  }
  
  return  mobile ? (
      <div>
          {sections.map(({ name, status, Component }, index) => (
              <Component key={name} animation={status} firstLoad={index === 0 && options.firstLoad}/>
          ))}
      </div>
  ) : (
    <ReactFullpage
      scrollOverflow
      onLeave={sectionMove}
      scrollingSpeed={1200}
      verticalCentered={false}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className={`fullpage-inner-wrap ${options.isLast ? 'last-section' : ''}`}>
              {sections.map(({ name, status, Component }, index) => (
                <Component key={name} animation={status} firstLoad={index === 0 && options.firstLoad}/>
              ))}
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
