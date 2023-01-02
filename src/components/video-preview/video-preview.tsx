type VideoPreviewProps = {
  movieVideoLink: string;
};

function VideoPreview({ movieVideoLink }: VideoPreviewProps) {
  return <video src={movieVideoLink} muted autoPlay width="280" height="175"/>;
}

export default VideoPreview;
