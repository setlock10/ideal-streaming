import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./Movies";
import Profile from "./Profile";
import NavBar from "./NavBar";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/Profile">
            {/* <h1>Test Route</h1> */}
            <Profile/>
          </Route>
          <Route path="/">
            {/* <h1>Page Count: {count}</h1> */}
            <Movies/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;