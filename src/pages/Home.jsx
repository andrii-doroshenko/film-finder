import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fetchMovies from 'services/moviesApi';

const Home = () => {
  const [trends, setTrends] = useState(null);
  const trendsQuery = '/trending/movie/week'; //query
  const location = useLocation();

  useEffect(() => {
    const fetchTrends = async () => {
      const response = await fetchMovies(trendsQuery);
      setTrends(response.data.results);
    };

    fetchTrends();
  }, []);

  return (
    <div>
      {trends ? (
        <>
          <h1>The most popular movies this week</h1>
          <ul>
            {trends.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
