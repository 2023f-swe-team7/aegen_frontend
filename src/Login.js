import logo from './img/swe_logo.png';
import './Login.css';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      const response = await axios.post("http://aegen.skku.ac.kr/v1/auth/login", {
        id: id,
        password: password,
      });

      console.log("로그인 성공", response.data);
    } catch(error) {
      console.error("로그인 실패", error.message);
    }
  };

  const handleLogin1 =() => {
    console.log(id);
    console.log(password);
    if(id == "test" && password == "1234") {
      navigate("/main");
    } else {
      alert("로그인 실패");
    }
  }

  return (
    <div className="Login">
        <div className='loginContainer'>
            <img src={logo}/>
            <div className="inputContainer">
                <h2>AEGEN</h2>
                <input 
                type = "text"
                placeholder='ID'
                value={id}
                onChange={(e) => setId(e.target.value)}
                ></input>
                <input
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <div className="buttonContainer">
                  <button onClick={handleLogin1}>로그인</button>
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
