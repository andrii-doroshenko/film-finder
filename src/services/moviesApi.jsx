import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eda83a71773ad3438eacfd6f8cef19c1';

const fetchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}${query}`, {
      params: {
        method: 'get',
        api_key: API_KEY,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

fetchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

export default fetchMovies;