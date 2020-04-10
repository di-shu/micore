import { gsap, Power2 } from 'gsap'
import { useEffect } from 'react'

export const fadeUp = (el, options) => {
  return
}

export const fadeIn = (el, options) => {
  return gsap.from(el, {
    opacity: 0,
    duration: options.duration,
    delay: options.delay,
    ease: Power2.easeInOut
  }).play()
}

export const ScrollAnimation = (props) => {
  useEffect(() => {
    let boxElement
    boxElement = $('.animate').get(0)

    const createObserver = () => {
      let observer
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          gsap.from(entry.target,
            {
              opacity: 0,
              transform: `translateY(30px)`,
              duration: 1,
              delay: 0,
              ease: Power2.easeInOut
            })
        })
      }, options)

      observer.observe(boxElement)
    }

    createObserver()
  }, [])

  return (
    <>
      {props.children}
    </>
  )
}
