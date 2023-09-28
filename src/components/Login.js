// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async () => {
    setError(null);

    try {
      const credentials = {
        usr: "administrator",
        pwd: "Anand"
      };

      const response = await axios.get('https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token', {
        auth: {
          username: credentials.usr,
          password: credentials.pwd,
        },
      });

      const accessToken = response.data.access_token;
      onLogin(accessToken);
      history.push('/listing');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
