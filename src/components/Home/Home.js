import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { getTopRated } from '../api';
import TopRatedItem from './TopRatedItem/TopRatedItem';
import './Home.css';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      topRatedList: [],
      show: false
    }
    this.allRefs = []
  }

  componentDidMount() {
    // Get top rated films from api.js
    getTopRated().then(response => {
      this.setState({topRatedList: response.data.results});
    })
  }

  render() {
    return (
      <div className="home-container">
      {this.state.topRatedList.map((x,i) => {
        return (
          <ReactTransitionGroup key={x.id}>
             {
               this.state.topRatedList[0] &&
                <TopRatedItem
                  id={x.id}
                  backdrop={x.backdrop_path}
                  poster={x.poster_path}
                  title={x.title}
                  vote={x.vote_average}
                  index={i}
                  ref={ref => this.allRefs.push(ref)}
                  />
             }
            </ReactTransitionGroup>
            )
          })}
      </div>
    )
  }
}

export default Home;
