import { TweenMax, TimelineMax } from 'gsap'

const duration = 0.33

export default {
  show(target, cb) {
    console.log('show', target, duration, cb)

    return TweenMax.to(target, duration, {
      opacity: 1,
      onComplete() {
        cb()
      },
    })

    // return new TimelineMax()
    //   .staggerTo(target, duration, {opacity: 0}, .2)
    // }
  },
  hide(target, cb) {
    console.log('hide', target, duration, cb)
    return TweenMax.to(target, duration, {
      opacity: 0,
      onComplete() {
        cb()
      },
    })
  }
}
