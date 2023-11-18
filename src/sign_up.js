import './sign_up.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async() => {
    try {
      const response = await axios.post("http://aegen.scg.skku.ac.kr/v1/auth", {
        name: name,
        subject: subject,
        studentId: studentId,
        email: email,
        id: id,
        password: password,
      });
      console.log("회원가입 성공", response.data);
    } catch(error) {
      console.error("회원가입 실패", error.message);
    }
  };

  return (
    <div className="SignUp">
        <div className='header'>
            <h2>AEGEN</h2>
        </div>
        <div className="signupContainer">
            <div className="infoContainer">
                <h3>이름 :</h3>
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
                <h3>수업 :</h3>
                <input value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                <h3>학번 :</h3>
                <input value={studentId} onChange={(e) => setStudentId(e.target.value)}></input>
                <h3> </h3>
                <input></input>
                <h3>이메일 :</h3>
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <h3> </h3>
                <input></input>
                <h3>아이디 :</h3>
                <input value={id} onChange={(e) => setId(e.target.value)}></input>
                <h3> </h3>
                <input></input>
                <h3>비밀번호 :</h3>
                <input
                  tyle="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
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
