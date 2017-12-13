import { TweenMax, TimelineMax } from 'gsap'

const topRatedDuration = 0.33;
const filmDuration = 0.2;


export default {
  showTopRated(target, cb, index) {
    // console.log('show', target, duration, cb)
    return TweenMax.to(target, topRatedDuration, {
      opacity: 1,
      delay: index*0.1,
      y: 0,
      onComplete() {
        cb()
      },
    })
  },
  hideTopRated(target, cb, topRatedDuration) {
    return TweenMax.to(target, topRatedDuration, {
      opacity: 0,
      y: 100,
      onComplete() {
        cb ? cb() : null;
      }
    })
  },
  showFilmHeader(target, cb) {
    console.log('header');
    return TweenMax.to(target, filmDuration, {
      opacity: 1,
      y: 0,
      delay: 0,
      onComplete() {
        cb()
      }
    })
  },
  showFilmBody(target, cb) {
    console.log('show film');
    return TweenMax.to(target, filmDuration, {
      opacity: 1,
      y: 0,
      onComplete() {
        cb()
      }
    })
  }
}
