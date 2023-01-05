import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../consts';
import { MovieData } from '../../types/movie.model';
import VideoPreview from '../video-preview/video-preview';

type MovieCardProps = {
  movie: MovieData
};

function MovieCard({ movie }: MovieCardProps) {
  const [videoPreview, setVideoPreview] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      onMouseEnter={() => setVideoPreview(true)}
      onMouseLeave={() => setVideoPreview(false)}
      onClick={() => navigate(`${APIRoute.Movies}/${movie.id}`)}
      className="small-film-card catalog__films-card"
    >
      {videoPreview ? (
        <VideoPreview movieVideoLink={movie.videoLink}/>
      ) : (
        <div className="small-film-card__image">
          <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
        </div>
      )}

      <h3 className="small-film-card__title">{movie.name}</h3>
    </article>
  );
}

export default MovieCard;
