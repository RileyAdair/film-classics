import React, { Component } from 'react';
import gsap from '../../../gsap/animations';
import { imageURL } from '../../api';
import { withRouter } from 'react-router-dom';

class TopRatedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.handleClick = this.handleClick.bind(this)
  }
  // used when component is initially render w/ TransitionGroup
  componentWillAppear(cb) {
    // const self = this

    const backdropPromise = new Promise((resolve, reject) => {
      this.backdrop.onload = (e) => {
          console.log(e)
          resolve()
      }
    })

    const posterPromise = new Promise((resolve, reject) => {
      this.poster.onload = () => {
        resolve()
      }
    })

    const allPromises = Promise.all([backdropPromise, posterPromise]).then(() => {
      gsap.show(this.item, cb, this.props.index)
    })

  }

  // used when component is added to already rendered TransitionGroup
  componentWillEnter(cb) {
    gsap.show(this.item, cb, this.props.index)
  }

  componentDidMount() {
    this.props.storeRef(this.item)
  }

  componentWillLeave(cb) {
      gsap.hide(this.item, cb)
  }

  // handleClick() {
  //   const time = 2
  //   gsap.hide(this.item, null, time);
  //   console.log("start")
  //   setTimeout(() => {
  //     console.log("end")
  //     this.props.changePage()
  //   }, time*1000);
  // }

  render() {
    return (
      <div className="top-rated-item" ref={ref => this.item = ref} onClick={this.props.handleClick}>  
        <img className="item-backdrop" ref={ref => this.backdrop = ref} src={imageURL() + this.props.backdrop} alt="Backdrop"/>
        <img className="item-poster" ref={ref => this.poster = ref} src={imageURL() + this.props.poster} alt="Poster"/>
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
