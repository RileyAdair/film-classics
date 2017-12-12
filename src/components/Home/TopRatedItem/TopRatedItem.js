import React, { Component } from 'react';
import gsap from '../../../gsap/animations';
import { imageURL } from '../../api';
import { Link } from 'react-router-dom';

class TopRatedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }
componentWillEnter(cb) {
    gsap.show(this.item, cb)
  }

  componentWillLeave(cb) {
      gsap.hide(this.item, cb)
  }

  handleClick() {
    console.log(this.props);
    gsap.hide(this.item);
    // this.props.history.push(`/listings/${category}/all`);
  }

  render() {
    return (
      <div className="top-rated-item" ref={ref => this.item = ref} onClick={this.handleClick}>

          <img className="item-backdrop" src={imageURL() + this.props.backdrop} alt="Backdrop"/>
          <img className="item-poster" src={imageURL() + this.props.poster} alt="Poster"/>
          <div className="item-description-container">
            <h4>{this.props.title}</h4>
            <div className="item-rating">
              {this.props.vote} <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>

      </div>
    )
  }
}

export default TopRatedItem;
