class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      currentVideo : null,
      videoList : []
    };
  }

  handleClick(video){
    this.setState({
      currentVideo : video,
      videoList : exampleVideoData
    });
  }

  handleSearch(input){

    var result = (data) => {
      this.setState({
        currentVideo : data.items[0],
        videoList : data.items
      })
    // window.videoData = data.items;
    }
    
    console.log("working")
    searchYouTube(input,result)
  }

  render(){
    return (
      <div>
        <Nav searchHandler={this.handleSearch.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer item = {this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList clickHandler = {this.handleClick.bind(this)} item = {this.state.videoList} />
        </div>
      </div>
    );
  }

  //component did mount
  componentDidMount(){
    var query = "kittens"

    searchYouTube(query, (videos) =>{
      this.setState({
        videos : videos,
        currentVideo : videos[0]
      })
    } )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

