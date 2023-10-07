import axios from 'axios';
import PropTypes from 'prop-types';

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const fetchMovies = async query => {
  try {
    const response = await axios.get(`${REACT_APP_BASE_URL}${query}`, {
      params: {
        method: 'get',
        api_key: REACT_APP_API_KEY,
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
