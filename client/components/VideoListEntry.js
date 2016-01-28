var VideoListEntry = (props) => {

  return ( 
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.item.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{props.item.snippet.title}</div>
        <div className="video-list-entry-detail">{props.item.snippet.description}</div>
      </div>
    </div>
  )

};

window.VideoListEntry = VideoListEntry;
