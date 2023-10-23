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
import Logo from 'components/Logo/Logo';

const Cards = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <p>Here are the movies for your search:</p>
      <List>
        {movies.map(({ id, poster_path, title }) => (
          <Item>
            <StyledLink
              key={id}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                  width={'185'}
                  height={'278'}
                  alt={title}
                  style={{ border: '1px solid #ddd' }}
                />
              ) : (
                <BackDrop>
                  <Logo />
                </BackDrop>
              )}
              <Title>{title}</Title>
            </StyledLink>
          </Item>
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
