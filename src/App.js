import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/signup">
      <SignupPage />
      </Route>
      <Route path="/login">
      <LoginPage />
      </Route>
      </Router>
    </div>
  );
}

export default App;
