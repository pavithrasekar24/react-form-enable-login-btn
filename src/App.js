import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
export default function App() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });
  const [isValid, setIsValid] = useState('disable');
  let { username, password } = details;
  let handleChange = (e) => {
    let { name, value } = e.target;
    let det = { ...details };
    det[name] = value;
    setDetails(det);
    loginEnable();
  };

  // useEffect(() => {
  //   loginEnable();
  // }, [details]);

  let loginEnable = () => {
    if (details.username != '' && details.password != '') {
      setIsValid('');
    } else {
      setIsValid('disable');
    }
  };
  let handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h3>Providing Value enable Login button</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter Username"
          maxLength={10}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password"
          maxLength={15}
        />
        <br />
        <br />
        <button type="sumit" disabled={isValid}>
          Login
        </button>
      </form>
    </div>
  );
}
