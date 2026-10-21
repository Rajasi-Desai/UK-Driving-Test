import "./MediaDisplay.css";

const MediaDisplay = ({ type, image, video, autoPlayVideo = true }) => {
  return (
    <div className="media-display-container">
      {type === "image" && (
        <img src={image} 
            alt="question" 
            className="media"
        />
      )}
      {type === "video" && (
        <video
          controls
          autoPlay={autoPlayVideo}
          muted={autoPlayVideo}
          className="media"
        >
          <source src={video} type="video/mp4"/>
        </video>
      )}
    </div>
  );
};

export default MediaDisplay;