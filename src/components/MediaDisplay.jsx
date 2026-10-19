const MediaDisplay = ({ type, image, video, autoPlayVideo = true }) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {type === "image" && (
        <img src={image} 
            alt="question" 
            style={{
              maxWidth: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: "8px",
            }}
        />
      )}
      {type === "video" && (
        <video
          controls
          autoPlay={autoPlayVideo}
          muted={autoPlayVideo}
          style={{
            maxWidth: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        >
          <source src={video} type="video/mp4"/>
        </video>
      )}

    </div>
  );
};

export default MediaDisplay;