import { Form, Input, SubmitButton } from './SearchBox.styled';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange, onSubmite, value }) => {
  return (
    <Form action="" autoComplete="off" onSubmit={onSubmite}>
      <Input
        type="text"
        name="searchMovies"
        placeholder="Search movies..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmite: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBox;
