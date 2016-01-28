class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      currentVideo : exampleVideoData[0],
      videoList : exampleVideoData
    };
  }

  handleClick(video){
    this.setState({
      currentVideo : video,
      videoList : exampleVideoData
    });
  }

  render(){
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer item = {this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList clickHandler = {this.handleClick.bind(this)} item = {this.state.videoList} />
        </div>
      </div>
    );
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));

