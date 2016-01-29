var searchYouTube = (query, callback) => {

  var options = {
    part: 'snippet',
    type: 'video',
    key: window.YOUTUBE_API_KEY,
    q: query,
    videoEmbeddable: true,
    maxResults: 5,
  }


  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    // key: window.YOUTUBE_API_KEY,
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: callback,
    error: function(data){
      console.log("ERROR, ajaxfail")
    }
  });
}



window.searchYouTube = searchYouTube;

 


  // var url = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${window.YOUTUBE_API_KEY}`


// var searchYouTube = (query, callback) => {

//   var debSearch = _.debounce(function(){

//     var options = {
//       part: 'snippet',
//       type: 'video',
//       key: window.YOUTUBE_API_KEY,
//       q: query,
//       videoEmbeddable: true,
//       maxResults: 5,
//     }


//     $.ajax({
//       url: "https://www.googleapis.com/youtube/v3/search",
//       // key: window.YOUTUBE_API_KEY,
//       type: 'GET',
//       data: options,
//       contentType: 'application/json',
//       success: callback,
//       error: function(data){
//         console.log("ERROR, ajaxfail")
//       }
//     });
//   }, 400);

//   debSearch();

// }