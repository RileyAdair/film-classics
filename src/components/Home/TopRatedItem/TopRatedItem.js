import React, { Component } from 'react';
import gsap from '../../../gsap/animations';
import { imageURL } from '../../api';

class TopRatedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // used when component is initially render w/ TransitionGroup
  componentWillAppear(cb) {
    // Animate TopRatedItem after backdrop and poster has been loaded
    const backdropPromise = new Promise((resolve, reject) => {
      this.backdrop.onload = (e) => {
          resolve()
      }
    })

    const posterPromise = new Promise((resolve, reject) => {
      this.poster.onload = () => {
        resolve()
      }
    })

    return Promise.all([backdropPromise, posterPromise]).then(() => {
      gsap.showTopRated(this.item, cb, this.props.index)
    })

  }

  // used when component is added to already rendered TransitionGroup
  componentWillEnter(cb) {
    gsap.show(this.item, cb, this.props.index)
  }

  componentDidMount() {
    this.props.storeRef(this.item)
  }

  render() {
    return (
      <div className="top-rated-item" ref={ref => this.item = ref} onClick={this.props.handleClick}>
        <img className="item-backdrop" ref={ref => this.backdrop = ref} src={imageURL + this.props.backdrop} alt="Backdrop"/>
        <img className="item-poster" ref={ref => this.poster = ref} src={imageURL + this.props.poster} alt="Poster"/>
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
