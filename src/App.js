import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FireBaseContext } from './store/CreateContext';
import Create from './Components/Create/Create';

function App() {

  const {setUser} = useContext(AuthContext)
  const {Firebase} = useContext(FireBaseContext)

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

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
      <Route path="/create">
      <Create />
      </Route>
      </Router>
    </div>
  );
}

export default App;
