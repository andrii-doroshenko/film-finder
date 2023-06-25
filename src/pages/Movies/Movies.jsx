import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Cards from '../../components/Cards/Cards';
import fetchMovies from '../../services/moviesApi';
import Searchbox from '../../components/SearchBox/SearchBox';
import isLoading from 'utils/Loading';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [queryValue, setQueryValue] = useState(movieName);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name: name.toLowerCase() } : {};
    setSearchParams(nextParams);
  };

  const handleSubmite = e => {
    e.preventDefault();
    setQueryValue(movieName);
  };

  useEffect(() => {
    if (!queryValue.trim()) return;
    isLoading(true);

    const fetchSearchMovies = async () => {
      const response = await fetchMovies(`/search/movie?query=${queryValue}`);

      if (response.data.total_results === 0)
        Notify.warning('Sorry, no matches found!');
      isLoading(false);

      setMovies(response.data.results);
    };

    fetchSearchMovies();
  }, [queryValue]);

  return (
    <div>
      <Searchbox
        value={movieName}
        onSubmite={handleSubmite}
        onChange={updateQueryString}
      />
      <div>{movies.length > 0 && <Cards movies={movies} />}</div>
    </div>
  );
};

export default Movies;
