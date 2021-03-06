class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: exampleVideoData, // Array of videos
      currentVid: exampleVideoData[0],
      query: ''
    }
  }

  handleSearch() {
    searchYouTube({key: window.YOUTUBE_API_KEY, query: this.state.query, max: 5}, function(data) {console.log(data)})
  }

  handleClick(e) {
    this.setState({
      currentVid: e
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch.bind(this) value={this.state.query}}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos}
            handleClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//
//this.setState({videos: data, currentVid: data[0]})