import { useLocation } from 'react-router-dom';
import {
  Container,
  BackDrop,
  List,
  Item,
  Title,
  StyledLink,
} from './Cards.styled';
import PropTypes from 'prop-types';

const Cards = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <p>Here are the movies for your search:</p>
      <List>
        {movies.map(({ id, poster_path, title }) => (
          <StyledLink key={id} to={`/movies/${id}`} state={{ from: location }}>
            <Item>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                  width={'185'}
                  height={'278'}
                  alt={title}
                />
              ) : (
                <BackDrop>No image</BackDrop>
              )}
              <Title>{title}</Title>
            </Item>
          </StyledLink>
        ))}
      </List>
    </Container>
  );
};

Cards.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
