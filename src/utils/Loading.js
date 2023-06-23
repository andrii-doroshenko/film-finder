import { Loading } from 'notiflix/build/notiflix-loading-aio';
import PropTypes from 'prop-types';

const isLoading = toggle => {
  if (!toggle) {
    return Loading.remove();
  } else {
    return Loading.standard('Loading...');
  }
};

isLoading.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default isLoading;
