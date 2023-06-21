import { useEffect, useState } from 'react';
// import { RotatingLines } from 'react-loader-spinner'; //!todo.......
import Cards from '../../components/Cards/Cards';
import fetchMovies from '../../services/moviesApi';
import { Form, Input, SubmitButton } from './Movies.styled';

const Movies = () => {
  const [value, setValue] = useState('');
  const [queryValue, setQueryValue] = useState('');
  const [movies, setMovies] = useState([]);
  const fetchQuery = `/search/movie?query=${queryValue}`;

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmite = e => {
    e.preventDefault();
    setQueryValue(value);
  };

  useEffect(() => {
    if (!queryValue.trim()) return;

    const fetchSearchMovies = async () => {
      const response = await fetchMovies(fetchQuery);
      setMovies(response.data.results);
    };

    fetchSearchMovies();
  }, [queryValue, fetchQuery]);

  return (
    <div>
      <div>
        <Form action="" autoComplete="off" onSubmit={handleSubmite}>
          <Input
            type="text"
            name="searchMovies"
            placeholder="Search movies..."
            value={value}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Search</SubmitButton>
        </Form>
      </div>
      <div>{movies.length > 0 && <Cards movies={movies} />}</div>
    </div>
  );
};

export default Movies;
