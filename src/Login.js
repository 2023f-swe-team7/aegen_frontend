import logo from './img/swe_logo.png';
import './Login.css';

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
                  <button>회원가입</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
