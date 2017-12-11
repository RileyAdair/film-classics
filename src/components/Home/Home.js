import React, { Component } from 'react';
import { getTopRated } from '../api';
import TopRatedItem from './TopRatedItem/TopRatedItem';
import './Home.css';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      topRatedList: []
    }
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
        {this.state.topRatedList.map(x => {
          return(
            <TopRatedItem
              key={x.id}
              id={x.id}
              backdrop={x.backdrop_path}
              poster={x.poster_path}
              title={x.title}
              vote={x.vote_average} />
          )
        })}
      </div>
    )
  }
}

export default Home;
