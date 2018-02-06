var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      part:'snippet',
      key: options.key,
      type: 'video',
      videoEmbeddable: true,
      maxResults: options.max
    },
    success: function(data) {
      console.log(data)
    },
    error: function(data) {
      console.log('There was an error -- >', data)
    }
  })
};

window.searchYouTube = searchYouTube;