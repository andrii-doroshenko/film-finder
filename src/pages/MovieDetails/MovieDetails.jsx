import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import fetchMovies from 'services/moviesApi';
import {
  Image,
  Section,
  Container,
  StyledLink,
  Wrapper,
} from './MovieDetails.styled';
import isLoading from 'utils/Loading'; //!todo

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
