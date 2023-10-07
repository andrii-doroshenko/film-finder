import { useEffect, useState } from 'react';
import fetchMovies from 'services/moviesApi';
import isLoading from 'utils/Loading';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      isLoading(true);
      const response = await fetchMovies('/trending/movie/week');

      if (response.data.results === 0) {
        isLoading(false);
        return;
      }

      isLoading(false);
      setTrends(response.data.results);
    };

    fetchTrends();
  }, []);

  return (
    <div>
      {trends ? (
        <Container>
          <h1>The most popular movies this week:</h1>
          <MoviesList movies={trends} />
        </Container>
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default Home;
