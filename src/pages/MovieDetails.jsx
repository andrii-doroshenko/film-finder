import { useEffect, useState } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import BackLink from '../components/BackLink';
import fetchMovies from 'services/moviesApi';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Section = styled.section`
  &:not(:last-child) {
    border-bottom: 2px solid lightgray;
  }
`;

const Container = styled.div`
  padding: 15px;
`;

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orange;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 420px) {
    display: flex;
  }
`;

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const detailsQuery = `/movie/${movieId}`;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetchMovies(detailsQuery);

      setDetails(response.data);
    };
    fetchDetails();
  }, [detailsQuery]);
  return (
    <>
      {details ? (
        <>
          <Section>
            <Wrapper>
              <Container>
                <BackLink to={backLinkHref}>Back</BackLink>
                {
                  <Image
                    src={`https://image.tmdb.org/t/p/w185/${details.poster_path}`}
                    width={'185'}
                    alt={details.title}
                  />
                }
              </Container>

              <Container>
                <h2>{details.title}</h2>
                <p>User score: {Math.round(details.vote_average)} / 10</p>
                <b>Overview</b>
                <p>{details.overview}</p>
                <b>Genres</b>
                <p>{details.genres.map(({ name }) => name).join(', ')}</p>
              </Container>
            </Wrapper>
          </Section>

          <Section>
            <Container>
              <b>Additional information</b>
              <ul>
                <li>
                  <StyledLink to={'cast'}>Cast</StyledLink>
                </li>
                <li>
                  <StyledLink to={'reviews'}>Reviews</StyledLink>
                </li>
              </ul>
            </Container>
          </Section>

          <Section>
            <Container>
              <Outlet />
            </Container>
          </Section>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default MovieDetails;
