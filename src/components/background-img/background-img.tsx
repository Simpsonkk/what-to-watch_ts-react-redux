type BackgroundImgProps = {
  img: string,
  title: string,
}

function BackgroundImg({img, title}: BackgroundImgProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img
        src={img}
        alt={title}
      />
    </div>
  );
}

export default BackgroundImg;
