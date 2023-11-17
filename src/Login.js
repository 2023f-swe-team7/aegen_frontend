import logo from './img/swe_logo.png';
import './Login.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
        <div className='loginContainer'>
            <img src={logo}/>
            <div className="inputContainer">
                <h2>AEGEN</h2>
                <input placeholder='ID'></input>
                <input placeholder='password'></input>
                <div className="buttonContainer">
                  <button>로그인</button>
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
