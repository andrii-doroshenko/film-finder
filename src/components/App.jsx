import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';
import MovieDetails from '../pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
