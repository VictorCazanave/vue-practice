import axios from 'axios';
import config from './config';

const http = axios.create({
  // Add cors-anywhere.herokuapp proxy to fix CORS issue
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com',
  headers: {
    accept: 'application/json',
    'user-key': config.API_KEY,
  },
});

export default {
  search(game) {
    // console.log(process.env.API_KEY);
    return http.get(`/games/?search=${game}&limit=10&fields=name,first_release_date,cover`);
  },
};
