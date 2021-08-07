import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Profile from './components/profile';
import Dash from './components/dashboard';
import About from './components/about';
import Home from './components/home';
import './App.css';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <Nav login={login} />
      <Switch>
        <Route exact path="/">
          <Home login={login} setLogin={setLogin} />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/dashboard">
          <Dash />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
