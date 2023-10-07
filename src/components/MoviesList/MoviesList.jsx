import { useLocation } from 'react-router-dom';
import { StyledLink, PopularList, Item } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies); //!delet
  return (
    <PopularList>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                width={'185'}
                height={'278'}
                alt={title}
              />
              <p>{title}</p>
            </StyledLink>
          </Item>
        );
      })}
    </PopularList>
  );
};

export default MoviesList;
