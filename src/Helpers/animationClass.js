export const AnimationClass = ({ className, firstLoad, animation }) => {
  return `${className ? className : ''} ${firstLoad ? 'on-first-load' : animation ? 'on-enter' : 'on-leave'}`
}
