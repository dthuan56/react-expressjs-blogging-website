import client from './config.service';
import { setAuthToken } from './config.service';
import axios from 'axios';

const blogService = {
  get: function(page) {
    // let token = JSON.parse(localStorage.getItem('user')).token
    // setAuthToken(token);
    return client
      .get('/blogs', {
        params: {
          page
        }
      })
      .then(response => response.data);
  }
}

export default blogService;