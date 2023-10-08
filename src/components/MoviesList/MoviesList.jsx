import { useLocation } from 'react-router-dom';
import {
  StyledLink,
  PopularList,
  Item,
  Overlay,
  Thumb,
  Title,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <PopularList>
      {movies.map(({ id, poster_path, title, adult }) => {
        return (
          <Item key={id}>
            <Thumb>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                  width={'185'}
                  height={'278'}
                  alt={title}
                />
              </StyledLink>
              <Overlay to={`/movies/${id}`} state={{ from: location }} />
            </Thumb>
            <Title>{title}</Title>
          </Item>
        );
      })}
    </PopularList>
  );
};

export default MoviesList;
