import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignupPage from './Pages/Signup';


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
      </Router>
    </div>
  );
}

export default App;
