import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login';
import ListingPage from './components/Listing';
import UserPage from './components/User';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React Website</h1>
        </header>
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/listing" component={ListingPage} />
            <Route path="/user/:userName" component={UserPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
