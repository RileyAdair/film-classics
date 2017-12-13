import React from 'react';
import { imageURL } from '../../api';

const FilmHeader = (props) => {
  return (
    <div className="film-header-container">
      <img className="film-backdrop" src={imageURL + props.backdrop} alt="Backdrop"/>
      <div className="film-title-container">
        <div className="content-width">
          <h3 className="film-title bold">{props.title}</h3>
          <p className="film-tag-line gold">{props.tagline}</p>
        </div>
      </div>
    </div>
  )
}

export default FilmHeader;
