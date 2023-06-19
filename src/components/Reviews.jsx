import { useEffect, useState } from 'react';
import fetchMovies from '../services/moviesApi';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  &:not(:last-child) {
    border-bottom: 2px solid lightgray;
  }
`;

const Container = styled.div`
  padding: 15px;
`;

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const detailsQuery = `/movie/${movieId}/reviews`;

  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetchMovies(detailsQuery);

      setReviews(response.data.results);
    };

    fetchCredits();
  }, [detailsQuery]);

  return (
    <>
      {reviews ? (
        <Section>
          <Container>
            <div>
              <ul>
                {reviews.map(({ author, id, created_at, content }) => {
                  const date = new Date(created_at);
                  const formattedDate = date.toLocaleString();
                  return (
                    <li key={id}>
                      <small>{formattedDate}</small>
                      <p>
                        User: <b>{author}</b>
                      </p>
                      <p>{content}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </Section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Reviews;

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
