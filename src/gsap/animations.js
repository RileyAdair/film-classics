import { TweenMax } from 'gsap'

const topRatedDuration = 0.33;
const filmDuration = 0.3;

export default {
  showTopRated(target, cb, index) {
    return TweenMax.to(target, topRatedDuration, {
      opacity: 1,
      delay: index*0.1,
      y: 0,
      onComplete() {
        cb()
      },
    })
  },
  hideTopRated(target, cb, duration) {
    return TweenMax.to(target, duration, {
      opacity: 0,
      y: 200,
      onComplete() {
        cb ? cb() : null;
      }
    })
  },
  showFilmBody(target, cb) {
    return TweenMax.to(target, filmDuration, {
      opacity: 1,
      y: 0,
      onComplete() {
        cb()
      }
    })
  }
}
