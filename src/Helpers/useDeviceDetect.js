import { useEffect, useState } from 'react'

const InitState = { mobile: false, tablet: false, laptop: false, minWidthLaptop: false, desktop: false }

export const useDeviceDetect = () => {
  const [device, setDevice] = useState(InitState)
  
  useEffect(() => {
    const width = window.innerWidth
  
    if (width > 0 && width < 576) {
      setDevice({ ...InitState, mobile: true })
    }
  
    if (width > 767 && width < 991) {
      setDevice({ ...InitState, tablet: true })
    }
  
    if (width > 992) {
      setDevice({ ...InitState, minWidthLaptop: true })
    }
  
    if (width > 992 && width < 1199) {
      setDevice({ ...InitState, minWidthLaptop: true, laptop: true })
    }
  
    if (width > 1200) {
      setDevice({ ...InitState, minWidthLaptop: true, desktop: true })
    }
  }, [])
  
  return device
}
