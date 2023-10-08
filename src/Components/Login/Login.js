import React, { useContext, useState } from 'react';
import { FireBaseContext } from '../../store/CreateContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Firebase } from '../../firebase/config';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Login() {

  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {Firebase} = useContext(FireBaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          history.push("/")
    }
  )}


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
