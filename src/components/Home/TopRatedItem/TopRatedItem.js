import React from 'react';
import { imageURL } from '../../api';
import { Link } from 'react-router-dom';

class TopRatedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return (
      <div className="top-rated-item">
        <Link to={`/film/${props.id}`}>
          <img className="item-backdrop" src={imageURL() + props.backdrop} alt="Backdrop"/>
          <img className="item-poster" src={imageURL() + props.poster} alt="Poster"/>
          <div className="item-description-container">
            <h4>{props.title}</h4>
            <div className="item-rating">
              {props.vote} <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default TopRatedItem;
