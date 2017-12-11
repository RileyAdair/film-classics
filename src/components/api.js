import axios from 'axios';
import { key } from '../config'

const apiURL = 'https://api.themoviedb.org/3/';
const apiKey = key();

// Image URL for film backdrops and posters
export const imageURL = () => {
  return 'http://image.tmdb.org/t/p/w780';
}

// Get top rated films from The Movie Database API
export const getTopRated = () => {
  return axios.get(`${apiURL}movie/top_rated${apiKey}`)
}

// Get film data from The Movie Database API
export const getFilmData = (id) => {
  return axios.get(`${apiURL}movie/${id}${apiKey}&append_to_response=reviews,videos`)
}
