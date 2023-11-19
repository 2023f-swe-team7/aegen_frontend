import './sign_up.css';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [studentId, setStudentId] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [subject4, setSubject4] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjects = [subject1, subject2, subject3, subject4].filter(Boolean);
    console.log(password)

    fetch('/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        studentId: studentId,
        password: password,
        email: email,
        major: major,
        subject: subjects
      }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`An error has occured: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('회원가입이 성공적으로 완료되었습니다.');
        navigate("/");
    })
    .catch(error => {
        console.error(error);
        alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
    });
  };

  return (
    <div className="SignUp">
        <div className='header'>
            <h2>AEGEN</h2>
        </div>
        <div className="signupContainer">
            <div className="infoContainer">
                <h3>이름 :</h3>
                <input onChange={e => setName(e.target.value)}></input>
                <h3>전공 :</h3>
                <input onChange={e => setMajor(e.target.value)}></input>
                <h3>학번 :</h3>
                <input onChange={e => setStudentId(e.target.value)}></input>
                <h3>수업 :</h3>
                <input onChange={e => setSubject1(e.target.value)}></input>
                <h3>이메일 :</h3>
                <input onChange={e => setEmail(e.target.value)}></input>
                <h3> </h3>
                <input onChange={e => setSubject2(e.target.value)}></input>
                <h3>아이디 :</h3>
                <input onChange={e => setId(e.target.value)}></input>
                <h3> </h3>
                <input onChange={e => setSubject3(e.target.value)}></input>
                <h3>비밀번호 :</h3>
                <input onChange={e => setPassword(e.target.value)} type="password"></input>
                <h3> </h3>
                <input onChange={e => setSubject4(e.target.value)}></input>
            </div>
            <Link to="/">
              <button onClick={handleSubmit}>회원가입</button>
            </Link>
        </div>
    </div>
  );
}

export default SignUp;
