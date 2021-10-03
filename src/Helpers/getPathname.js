import { useRouter } from 'next/router'

export const getPathname = () => {
  const { pathname } = useRouter()
  let isProject = false
  let isService = false

  pathname.includes('/projects/') ? isProject = true : isProject = false
  pathname.includes('/services/') ? isService = true : isService = false

  return { isService, isProject }
}