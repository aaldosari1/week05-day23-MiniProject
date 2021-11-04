import { useHistory } from "react-router-dom"; 

function SearchBar(){
    const history = useHistory();

    return(

          <div >
<div className="topnav">
        <button id="srch">Search</button>
       
        <a onClick={() => {history.push("/")}} className="active" href="#home" id="Home">Home</a>
        <a onClick={() => {history.push("/WatchLater")}} href="#WatchLater" id="WatchLater">Watch Later</a>
        
        <input id="srchFld" type="text" placeholder=""/> 
        
      </div>
    
          </div>

    )
}

export default SearchBar;