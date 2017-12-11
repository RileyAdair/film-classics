import React from 'react';
import './Buttons.css';

const TwitterButton = (props) => {
  const tweetFilm = () => {
    // Opens new window to tweet about the film
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(`Wanna watch "${props.title}" and chill?`));
  }
  return (
    <button onClick={tweetFilm} className="btn twitter-btn">
      Share on Twitter <i className="fa fa-twitter"></i>
    </button>
  )
}

export default TwitterButton;
