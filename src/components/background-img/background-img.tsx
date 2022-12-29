type BackgroundImgProps = {
  movieImg: string;
  movieTitle: string;
};

function BackgroundImg({
  movieImg,
  movieTitle,
}: BackgroundImgProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={movieImg} alt={movieTitle} />
    </div>
  );
}

export default BackgroundImg;
