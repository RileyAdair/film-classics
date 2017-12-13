import React, { Component } from 'react';
import gsap from '../../../gsap/animations';
import { imageURL } from '../../api';

class FilmHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // used when component is initially rendered w/ TransitionGroup
  componentWillAppear(cb) {
    const backdropPromise = new Promise((resolve, reject) => {
      this.backdrop.onload = (e) => {
          // console.log(e)
          resolve()
      }
    })

    const allPromises = Promise.all([backdropPromise]).then(() => {
      gsap.showFilmHeader(this.header, cb)
    })
  }

  render() {
    return (
      <div className="film-header-container" ref={ref => this.header = ref}>
        <img className="film-backdrop" ref={ref => this.backdrop = ref} src={imageURL() + this.props.backdrop} alt="Backdrop"/>
        <div className="film-title-container">
          <div className="content-width">
            <h3 className="film-title bold">{this.props.title}</h3>
            <p className="film-tag-line gold">{this.props.tagline}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmHeader;
