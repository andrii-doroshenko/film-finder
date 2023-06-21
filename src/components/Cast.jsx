import { useEffect, useState } from 'react';
import fetchMovies from '../services/moviesApi';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ListCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Card = styled.li`
  width: 100px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  p {
    margin-top: 5px;
    font-size: 12px;
    text-align: center;
  }
`;

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();
  const detailsQuery = `/movie/${movieId}/credits`;

  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetchMovies(detailsQuery);

      setCredits(response.data.cast);
    };

    fetchCredits();
  }, [detailsQuery]);

  return (
    <>
      {credits ? (
        <ListCards>
          {credits.map(
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
          )}
        </ListCards>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Cast;
