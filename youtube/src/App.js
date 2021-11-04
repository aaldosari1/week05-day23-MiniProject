import { Route } from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import WatchLater from './components/WatchLater';
import SearchBar from "./components/SearchBar"
import './App.css';

function App() {


  return (
    <div className="App" style={{
     disply:"grid"}

    }
    >

      <SearchBar/>
      <Route exact path="/" component={Home} />
      <Route path="/Details" component={Details} />
      <Route path="/WatchLater" component={WatchLater} />
     {/*<div >
       <Home />
     </div>*/} 
     
    </div>
  );
}

export default App;
