import logo from './img/swe_logo.png';
import './Login.css';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    try{
      const response = await fetch('/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: id,
          password: password
        }),
      });
      if(!response.ok){
        throw new Error('Login failed');
      }
      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      navigate("/main");
    }catch (error){
      console.error(error);
      alert('로그인에 실패하였습니다.');
    }
  }

  return (
    <div className="Login">
        <div className='loginContainer'>
            <img src={logo}/>
            <div className="inputContainer">
                <h2>AEGEN</h2>
                <input placeholder='ID' onChange={e => setId(e.target.value)}></input>
                <input placeholder='password' onChange={e => setPassword(e.target.value)} type="password"></input>
                <div className="buttonContainer">
                  <button onClick={handleLogin}>로그인</button>
                  <Link to="/signup">
                    <button>회원가입</button>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Login;