import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import NavBar from "./NavBar";
import './App.css';
import MovieHome from "./MovieHome";
import Header from "./Header";
import MoviePage from "./MoviePage";
import Login from "./Login";
import SignupPage from "./SignupPage";
import Bookmarks from "./Bookmarks";

document.title="iDeal Streaming"




function App() {
  const [count, setCount] = useState(0);
  const [selectedMovie,setSelectedMovie] = useState([])


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);



  //Check Login Staus
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [user, setUser] = useState(null);


  useEffect(()=>{

    fetch('/me')
    .then(res=>res.json())
    .then(data=> {
      //console.log(data)
      if(data !== null){
        setUser(data)
        setIsAuthenticated(true)
      }
      
    })


  },[])





// debugger






  return (
    <BrowserRouter>
      <Header/>
      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
      <div className="App">
        
        <Switch>
        <Route path="/Logon">
            <Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
          </Route>
          <Route path="/SignupPage">
            <SignupPage user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
          </Route>
          <Route path="/MoviePage">
            <MoviePage user={user} selectedMovie={selectedMovie}/>
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Bookmarks">
            <Bookmarks setSelectedMovie={setSelectedMovie} />
          </Route>
          <Route path="/">
            <MovieHome setSelectedMovie={setSelectedMovie}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;