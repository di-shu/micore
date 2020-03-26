import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useCheckRoute = () => {
  const [isProject, setIsProject] = useState(false)
  const [isServices, setIsServices] = useState(false)
  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname.includes('/projects')) {
      setTimeout(() => {
        setIsProject(true)
      }, 100)
    } else {
      setIsProject(false)
    }

    if (pathname.includes('/services')) {
      setTimeout(() => {
        setIsServices(true)
      }, 100)
    } else {
      setIsServices(false)
    }
  }, [])

  return { isProject, isServices }
}
