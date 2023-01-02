import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSelectedMovieAction } from '../../store/actions/api-actions';
import { getCurrentMovie } from '../../store/movie-data/selectors';
import Loader from '../loader/loader';

function VideoPlayer() {
  const videoPlayer = useRef() as MutableRefObject<HTMLVideoElement>;
  const [playing, setPlaying] = useState<boolean>(false);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentMovie = useAppSelector(getCurrentMovie);

  useEffect(() => {
    dispatch(fetchSelectedMovieAction(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (videoPlayer.current) {
      setVideoDuration(videoPlayer.current.duration);
    }
  }, [playing]);

  if (videoPlayer.current) {
    videoPlayer.current.ontimeupdate = () => {
      setVideoCurrentTime(videoPlayer.current.currentTime);
      setVideoProgress((videoPlayer.current.currentTime / videoDuration) * 100);
    };
  }

  const getCurrentVideoTime = (fullTime: number, currentTime: number) => {
    const timeLeft = fullTime - currentTime;
    return `${Math.floor(timeLeft / 60)  }:${  (`0${  Math.floor(timeLeft % 60)}`).slice(-2)}`;
  };

  const handlePauseClick = () => {
    videoPlayer.current.pause();
    setPlaying(false);
  };

  const handlePlayClick = () => {
    videoPlayer.current.play();
    setPlaying(true);
  };

  if (!currentMovie) {
    return <Loader />;
  }

  return (
    <div className="player">
      <video
        ref={videoPlayer}
        src={currentMovie.videoLink}
        className="player__video"
        poster={currentMovie.posterImage}
        autoPlay
        onPlay={() => setPlaying(true)}
      >
      </video>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={videoProgress}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value"> - {videoDuration && videoCurrentTime ? getCurrentVideoTime(videoDuration, videoCurrentTime) : '0:00:00'}</div>
        </div>

        <div className="player__controls-row">
          {playing && videoProgress !== 100 ? (
            <button onClick={handlePauseClick} type="button" className="player__play" data-testid='player-pause'>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button onClick={handlePlayClick} type="button" className="player__play" data-testid='play'>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}
          <div className="player__name">{currentMovie.name}</div>

          <button onClick={() => videoPlayer.current.requestFullscreen()} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
