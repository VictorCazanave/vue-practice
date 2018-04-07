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
  search(name) {
    return http.get(`/games/?search=${name}&limit=10&fields=name,cover`);
  },
  get(id) {
    return http.get(`/games/${id}?fields=*`);
  },
};
