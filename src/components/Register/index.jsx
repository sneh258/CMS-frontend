import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { makeAuthRequest } from '../../utils/makeRequest';
import { REGISTER_URL } from '../../constants/apiEndPoints';
import loginImage from './../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';

export default function UserRegister() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    console.log(user);
    console.log(password);
    try {
      await makeAuthRequest(REGISTER_URL, {
        data: {
          username: user,
          password:password,
        },
      });
      navigate('/login');
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return (
    <>
      {error && <div>username already exists</div>}
      <div data-testid="register-form" className="main-div">
        <div className="image-div">
          <p id="p1">Design APIs Fast,</p>
          <p id="p2">Manage content easily.</p>
          <img src={loginImage} />
        </div>
        <div className="login-div">
          <div className="sub-login-div">
            <div className="login-text">Register to your CMS+ account</div>
            <div className="login-cred">
              <p>Email:</p>
              <input
                data-testid="email-input"
                type="email"
                name="username"
                value={user}
                onChange={(event) => setUser(event.target.value)}
                placeholder="enter your username"
              />
              <p>Password:</p>
              <input
                data-testid="password-input"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="enter your password"
              />
              <button
                type="submit"
                disabled={user === '' || password === ''}
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
