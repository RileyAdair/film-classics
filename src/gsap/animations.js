import { TweenMax, TimelineMax } from 'gsap'

const duration = 0.35

export default {
  showTopRated(target, cb, index) {
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
  showFilmHeader(target, cb) {
    console.log('show film');
    return TweenMax.to(target, duration, {
      opacity: 1,
      onComplete() {
        cb()
      }
    })
  },
  showFilmBody(target, cb) {
    console.log('show film');
    return TweenMax.to(target, duration, {
      opacity: 1,
      y: 0,
      onComplete() {
        cb()
      }
    })
  }
}
