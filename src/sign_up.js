import './sign_up.css';
import React from 'react';
import {Link} from 'react-router-dom';

function SignUp() {
  return (
    <div className="SignUp">
        <div className='header'>
            <h2>AEGEN</h2>
        </div>
        <div className="signupContainer">
            <div className="infoContainer">
                <h3>이름 :</h3>
                <input></input>
                <h3>수업 :</h3>
                <input></input>
                <h3>학번 :</h3>
                <input></input>
                <h3> </h3>
                <input></input>
                <h3>이메일 :</h3>
                <input></input>
                <h3> </h3>
                <input></input>
                <h3>아이디 :</h3>
                <input></input>
                <h3> </h3>
                <input></input>
                <h3>비밀번호 :</h3>
                <input></input>
                <h3> </h3>
                <input></input>
            </div>
            <Link to="/">
              <button>회원가입</button>
            </Link>
        </div>
    </div>
  );
}

export default SignUp;
