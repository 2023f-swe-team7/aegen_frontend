import './Main.css';
import React, { useState } from 'react';
import axios from 'axios';
function Main() {
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');
  const [emailText, setEmailText] = useState('');
  const [emailTopic, setEmailTopic] = useState('');
  const [professorEmail, setprofessorEmail] = useState('');

  const accessToken = localStorage.getItem('accessToken');

  const handleClick = (value) => {
    setState(value);
  };

  function handleCategory(value) {
    setCategory(value);
  }

  const getPlaceholder = () => {
    switch(state) {
      case '질문':
        return '질문';
      case '수업':
        return '수업';
      case '시험':
        return '시험';
      case '결석':
        return '결석';
      case '병결':
        return '병결';
      case '질병':
        return '질병';
      case '예비군':
        return '예비군';
      case '가족상':
        return '가족상';
      case '제출':
        return '제출';
      case '점수 문의':
        return '점수 문의';
      case '장례식':
        return '장례식';
      case '과제 제출':
        return '과제 제출';
      case '과제 성적 문의':
        return '과제 성적 문의';
      case '과제 질문':
        return '과제 질문';
      case '연구실 면담':
        return '연구실 면담';
      case '진로 상담':
        return '진로 상담';
      case '기타 문의':
        return '기타 문의';
      case '기타':
        return '기타';
      case '그외':
        return '그외';
      case '소프트웨어공학개론':
        return '소프트웨어공학개론';
      case '운영체제':
        return '운영체제';
      default:
        return '';
    }
  };
  const Dropdown = props => {
    const [visibilityAnimation, setVisiblitiyAnimation] = React.useState(false);
    const [repeat, setRepeat] = React.useState(null);
    React.useEffect(() => {
      if(props.visibility) {
        clearTimeout(repeat);
        setRepeat(null);
        setVisiblitiyAnimation(true);
      } else {
        setRepeat(setTimeout(() => {
          setVisiblitiyAnimation(false);
        }, 400));
      }
    }, [props.visibility]);
    return (
      <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
          { visibilityAnimation && props.children }
      </article>
    )
  };
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [receiverText, setReceiverText] = useState('');
  const [dropdownButtonText, setDropdownButtonText] = useState('과목을 선택해 주세요');
  const handleDropdownSelecton = (subject) => {
    setDropdownButtonText(subject);
    setReceiverText(subject);
    setDropdownVisibility(false);
  };

  // 메일 내용을 업데이트하는 함수
  const updateEmailText = (newText) => {
    setEmailText(newText);
  };

  const handleGenerateEmail = async () => {
    try {
      const response = await axios.get('https://aegen.scg.skku.ac.kr/v1/mail', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: {
          subject: receiverText,
          type: state
        }
      });
      
      setEmailText(response.data.mail.replace(/\\n/g, '\n'));
      setprofessorEmail(response.data.professorEmail);
      const parts = response.data.mail.split('제목');
      setEmailTopic(parts[1].split('\\')[0]);
      console.log(emailTopic)

    } catch (error) {
      console.error('메일 생성 오류:', error);
      alert("카테고리와 과목 선택 여부를 확인해주세요.")
    }
  };

  // 메일 전송 버튼 클릭 핸들러
  const handleSendEmail = async () => {
    try {
      console.log('이메일 전송 요청:', {
        topic: emailTopic,
        text: emailText
      });

      const response = await axios.post('http://localhost:4000/v1/mail/send', {
        receiver: "sunwoong89@g.skku.edu", // 교수님 메일 -> professorEmail 변수 사용
        subject: emailTopic,
        text: emailText
      });

      console.log('이메일 전송 응답:', response.data);
      alert('메일이 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('메일 전송 오류:', error);
      alert('메일 전송에 실패했습니다.');
    }
  };

  return (
    <div className="Main">
        <div className='header'>
            <h2>AEGEN</h2>
        </div>
        <div className='mainContainer'>
            <div className="categoryContainer">
              <ul className="category">
                <li>
                  <a href="#">수업</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={(e) => {handleClick('수업'); handleCategory('수업 > 질문')}}>질문</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('시험'); handleCategory('수업 > 시험')}}>시험</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('기타'); handleCategory('수업 > 기타')}}>기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">출결</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={(e) => {handleClick('질병'); handleCategory('출결 > 병결')}}>병결</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('예비군'); handleCategory('출결 > 예비군')}}>예비군</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('장례식'); handleCategory('출결 > 가족상')}}>가족상</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('그외'); handleCategory('출결 > 기타')}}>기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">과제</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={(e) => {handleClick('과제 제출'); handleCategory('과제 > 제출')}}>제출</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('과제 성적 문의'); handleCategory('과제 > 점수 문의')}}>점수 문의</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('과제 질문'); handleCategory('과제 > 질문')}}>질문</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">기타</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={(e) => {handleClick('연구실 면담'); handleCategory('기타 > 연구실 면담')}}>연구실 면담</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('진로 상담'); handleCategory('기타 > 진로 상담')}}>진로 상담</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('기타 문의'); handleCategory('기타 > 기타 문의')}}>기타 문의</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="contentContainer">
              <div className="subjectContainer">
                <button onClick={e => setDropdownVisibility(!dropdownVisibility)} className='dropdownButton'>
                  {dropdownVisibility ? '' : dropdownButtonText}
                </button>
                <Dropdown visibility={dropdownVisibility}>
                  <ul>
                    <li><button className='listButton' onClick={() => handleDropdownSelecton("소프트웨어공학개론")}>소프트웨어공학개론</button></li>
                    <li><button className='listButton' onClick={() => handleDropdownSelecton("운영체제")}>운영체제</button></li>
                  </ul>
                </Dropdown>
              </div>
              <input className="receiver" value={professorEmail} onChange={(e) => setprofessorEmail(e.target.value)}></input>
            </div>
            <div className='emailContainer'>
              <textarea 
                className="email"
                value={emailText}
                onChange={(e) => updateEmailText(e.target.value)}
              ></textarea>
              <div className='otherContainer'>
                <div className='CategoryViewer'>
                  <p>{`category: ${category}`}</p>
                </div>
                <div className='buttonContainer2'>
                  <button onClick={handleGenerateEmail}>메일 생성</button>
                  <button onClick={handleSendEmail}>전송</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
export default Main;