import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FireBaseContext } from '../../store/CreateContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Signup() {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const {Firebase} = useContext(FireBaseContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
      res.user.updateProfile({displayName: username}).then(() => {
        Firebase.firestore().collection('users').add({
          id: res.user.uid,
          username: username,
          phone: phone
        }).then(() => {
          history.push("/login")
        })
      })
    })
  }

  const loginPage = (e) => {
    e.preventDefault();
    history.push("/login")
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='alternative' src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John@gmail.com"
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e) => {setPhone(e.target.value)}}
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
          <button>Signup</button>
        </form>
        <button onClick={loginPage}>Login</button>
      </div>
    </div>
  );
}
