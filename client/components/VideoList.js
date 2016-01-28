var VideoList = () => (
  <div className="video-list media">
    <VideoListEntry item={exampleVideoData[0]} />
    <VideoListEntry item={exampleVideoData[1]} />
    <VideoListEntry item={exampleVideoData[2]} />
    <VideoListEntry item={exampleVideoData[3]} />
    <VideoListEntry item={exampleVideoData[4]} />
   </div>
);

window.VideoList = VideoList;
