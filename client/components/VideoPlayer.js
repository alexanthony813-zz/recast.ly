var VideoPlayer = (props) => {
  
  var url = `https://www.youtube.com/embed/${props.item.id.videoId}?autoplay=1`
  return(
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.item.snippet.title}</h3>
        <div>{props.item.snippet.description}</div>
      </div>
    </div>
  )
}

window.VideoPlayer = VideoPlayer;
