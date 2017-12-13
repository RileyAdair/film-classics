import React, { Component } from 'react';
import gsap from '../../../gsap/animations';
import { imageURL } from '../../api';
import TwitterButton from '../../Buttons/TwitterButton'

class FilmBody extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // used when component is initially rendered w/ TransitionGroup
  componentWillAppear(cb) {
    // Animate FilmBody after image has loaded
    return new Promise((resolve, reject) => {
      this.poster.onload = () => {
        resolve()
      }
    })
    .then(() => {
      gsap.showFilmBody(this.body, cb)
    })

  }

  render() {
    return (
      <div className="film-body-container" ref={ref => this.body = ref}>
        <div className="content-width flex">
          <div className="film-poster-container">
            <img className="film-poster" ref={ref => this.poster = ref} src={imageURL + this.props.poster} alt="Poster" />
          </div>
          <div className="film-description-container">
            <div className="film-overview">
              <h3 className="bold">Overview</h3>
              <p>{this.props.overview}</p>
            </div>
            <div className="flex">
              <div className="film-release-date">
                <h3 className="bold">Release Date</h3>
                <p>{this.props.releaseDate}</p>
              </div>
              <div className="film-vote-average">
                <h3 className="bold">Vote Average</h3>
                <p>{this.props.voteAvg}</p>
              </div>
            </div>
            <TwitterButton
              title={this.props.title} />
          </div>
        </div>
      </div>
    )
  }
}

export default FilmBody;
