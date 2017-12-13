import { TweenMax, TimelineMax } from 'gsap'

const duration = 0.333

export default {
  show(target, cb, index) {
    // console.log('show', target, duration, cb)

    return TweenMax.to(target, duration, {
      opacity: 1,
      delay: index*0.1,
      y: 0,
      onComplete() {
        cb()
      },
    })
  },
  hide(target, cb, duration) {
    console.log('hide', target)
    return TweenMax.to(target, duration, {
      opacity: 0,
      y: 80,
      onComplete() {
        cb ? cb() : null
      },
    })
  }
}
