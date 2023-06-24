import { useEffect, useState } from 'react';
import fetchMovies from '../../services/moviesApi';
import { useParams } from 'react-router-dom';
import { ListCards, Card } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const detailsQuery = `/movie/${movieId}/credits`;
    const fetchCredits = async () => {
      const response = await fetchMovies(detailsQuery);

      setCredits(response.data.cast);
    };

    fetchCredits();
  }, [movieId]);

  return (
    <>
      {credits ? (
        <ListCards>
          {credits.length !== 0 ? (
            credits.map(
              ({ id, profile_path, original_name, character }) =>
                profile_path && (
                  <Card key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                      width={100}
                      height={150}
                      alt={original_name}
                    />
                    <p>{original_name}</p>
                    <p>Character: {character}</p>
                  </Card>
                )
            )
          ) : (
            <p>There are no casts for this film.</p>
          )}
        </ListCards>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Cast;
