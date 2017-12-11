import React from 'react';

const FilmHeader = (props) => {
  return (
    <div className="film-header-container">
      <div className="content-width">
        <h3 className="film-title bold">{props.title}</h3>
        <p className="film-tag-line gold">{props.tagline}</p>
      </div>
    </div>
  )
}

export default FilmHeader;
