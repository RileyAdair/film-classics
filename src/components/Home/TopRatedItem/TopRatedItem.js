import React, { Component } from 'react';
import gsap from '../../../gsap/animations';
import { imageURL } from '../../api';
import { Link } from 'react-router-dom';

class TopRatedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillEnter(cb) {
    gsap.show(this.item, cb)
  }

  componentWillLeave(cb) {
      gsap.hide(this.item, cb)
  }

  render() {
    return (
      <div className="top-rated-item" ref={ref => this.item = ref}>
        <Link to={`/film/${this.props.id}`}>
          <img className="item-backdrop" src={imageURL() + this.props.backdrop} alt="Backdrop"/>
          <img className="item-poster" src={imageURL() + this.props.poster} alt="Poster"/>
          <div className="item-description-container">
            <h4>{this.props.title}</h4>
            <div className="item-rating">
              {this.props.vote} <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default TopRatedItem;
