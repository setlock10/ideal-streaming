import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./Movies";
import Profile from "./Profile";
import NavBar from "./NavBar";
import './App.css';
import MovieHome from "./MovieHome";
import Header from "./Header";
import MoviePage from "./MoviePage";


function App() {
  const [count, setCount] = useState(0);
  const [selectedMovie,setSelectedMovie] = useState([])


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <div className="App">
        
        <Switch>
          <Route path="/MoviePage">
            <MoviePage selectedMovie={selectedMovie}/>
          </Route>
          <Route path="/Profile">
            {/* <h1>Test Route</h1> */}
            <Profile/>
          </Route>
          <Route path="/">
            {/* <h1>Page Count: {count}</h1> */}
            <MovieHome setSelectedMovie={setSelectedMovie}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;