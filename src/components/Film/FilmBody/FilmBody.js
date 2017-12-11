import React from 'react';
import { imageURL } from '../../api';
import TwitterButton from '../../Buttons/TwitterButton'

const FilmBody = (props) => {
  return (
    <div className="film-body-container">
      <div className="content-width flex">
        <div className="film-poster-container">
          <img className="film-poster" src={imageURL() + props.poster} alt="Poster" />
        </div>
        <div className="film-description-container">
          <div className="film-overview">
            <h3 className="bold">Overview</h3>
            <p>{props.overview}</p>
          </div>
          <div className="flex">
            <div className="film-release-date">
              <h3 className="bold">Release Date</h3>
              <p>{props.releaseDate}</p>
            </div>
            <div className="film-vote-average">
              <h3 className="bold">Vote Average</h3>
              <p>{props.voteAvg}</p>
            </div>
          </div>
          <TwitterButton
            title={props.title}/>
        </div>
      </div>
    </div>
  )
}

export default FilmBody;
