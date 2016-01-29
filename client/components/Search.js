var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="form-control" onChange={function(){props.searchHandler(document.getElementById("form-control").value)}}/>
    <button className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
