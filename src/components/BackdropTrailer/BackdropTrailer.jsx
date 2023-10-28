import { useState } from 'react';
import { useEffect, useRef } from 'react';
import {
  CloseIcon,
  Backdrop,
  IframeWrapper,
  IframeHeader,
  StyledIframe,
} from './BackdropTrailer.styled';
import { Link, useLocation, useParams } from 'react-router-dom';
import isLoading from 'utils/Loading';
import fetchMovies from 'services/moviesApi';

const BackdropTrailer = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    isLoading(true);

    const fetchTrailer = async () => {
      const { data } = await fetchMovies(`/movie/${movieId}/videos`);

      if (data.results.length < 1) {
        console.warn('No trailer results');
        return;
      }

      const filteredResult = data.results.filter(
        result => result.type === 'Trailer'
      );

      if (!filteredResult) {
        console.warn('No trailer results');
        return;
      }

      setMovie(filteredResult[0].key);
    };
    isLoading(false);

    fetchTrailer();
  }, [movieId]);

  return (
    <Backdrop>
      {isLoading && (
        <IframeWrapper>
          <IframeHeader>
            <span>Official trailer</span>
            <Link to={backLinkHref.current}>
              <CloseIcon />
            </Link>
          </IframeHeader>

          <StyledIframe
            title="YouTube Video Trailer"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </IframeWrapper>
      )}
    </Backdrop>
  );
};

export default BackdropTrailer;
