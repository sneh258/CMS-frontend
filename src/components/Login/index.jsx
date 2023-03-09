import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../constants/apiEndPoints';
import { makeAuthRequest } from '../../utils/makeRequest';
import './index.css';
import loginImage from './../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png';

export default function UserLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      // localStorage.removeItem('token');
      const loginData = await makeAuthRequest(LOGIN_URL, {
        data: {
          username: user,
          password,
        },
      });
      localStorage.setItem('jwt_token', loginData.data.JWT_token);
      navigate('/dashboard');
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };
  return (
    <>
      {error && <div>invalid password or username</div>}
      <div className="main-div">
        <div className="image-div">
          <p id="p1">Design APIs Fast,</p>
          <p id="p2">Manage content easily.</p>
          <img src={loginImage} />
        </div>
        <div className="login-div">
          <div className="sub-login-div">
            <div className="login-text">Login to your CMS+ account</div>
            <div className="login-cred">
              <p>Email:</p>
              <input
                type="email"
                name="username"
                value={user}
                onChange={(event) => setUser(event.target.value)}
                placeholder="enter your username"
              />
              <p>Password:</p>
              <input
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
                Login
              </button>
              {/* {text === 'Login' ? (
                <p className="forgot-pass">
                  <u>forgot password?</u>
                </p>
              ) : (
                <p></p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
