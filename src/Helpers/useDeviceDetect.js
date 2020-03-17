import { useEffect, useState } from 'react'

const InitState = { mobile: false, tablet: false, laptop: false, desktop: false }

export const useDeviceDetect = (isHigher = false) => {
  const [device, setDevice] = useState(InitState)
  
  useEffect(() => {
    const width = window.innerWidth
    
    if (width > 0 && width < 576) {
      setDevice({ ...InitState, mobile: true })
    } else if (width > 767 && width < 991) {
      setDevice({ ...InitState, tablet: true })
    } else if (width > 992 && width < 1199) {
      setDevice({ ...InitState, laptop: true })
    } else if (width > 1200) {
      setDevice({ ...InitState, desktop: true })
    }
  }, [])
  
  return device
}
