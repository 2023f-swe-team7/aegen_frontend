import './Main.css';
import React, { useState } from 'react';
import axios from 'axios';
function Main() {
  const [state, setState] = useState('');
  const [emailText, setEmailText] = useState('');

  const handleClick = (value) => {
    setState(value);
  };

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

  // 메일 전송 버튼 클릭 핸들러
  const handleSendEmail = async () => {
    try {
      console.log('이메일 전송 요청:', {
        receiver: receiverText,
        subject: '메일 제목',
        text: emailText
      });

      const response = await axios.post('http://localhost:4000/v1/mail/send', {
        receiver: "kimdozz01@gmail.com", // 수신자 주소는 원하는 주소로 바꾸고 테스트하시면 됩니다 (도연)
        subject: '소프트웨어공학개론 수업 결석 관련 문의(질병)',
        text: "안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456라고 합니다. \n다름이 아니라 제가 최근에 질병을 앓게 되었고, 이로 인해 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 이번 결석을 병결로 처리해주실 수 있는지 여쭈어보고 싶습니다. \n제 상황으로 인해 교수님께 불편함을 드려 죄송합니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림'"
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
                    <li><a href="#" onClick={() => handleClick('수업')}>질문</a></li>
                    <li><a href="#" onClick={() => handleClick('시험')}>시험</a></li>
                    <li><a href="#" onClick={() => handleClick('기타')}>기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">출결</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={() => handleClick('질병')}>병결</a></li>
                    <li><a href="#" onClick={() => handleClick('예비군')}>예비군</a></li>
                    <li><a href="#" onClick={() => handleClick('장례식')}>가족상</a></li>
                    <li><a href="#" onClick={() => handleClick('그외')}>기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">과제</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={() => handleClick('과제 제출')}>제출</a></li>
                    <li><a href="#" onClick={() => handleClick('과제 성적 문의')}>점수 문의</a></li>
                    <li><a href="#" onClick={() => handleClick('과제 질문')}>질문</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">기타</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={() => handleClick('연구실 면담')}>연구실 면담</a></li>
                    <li><a href="#" onClick={() => handleClick('진로 상담')}>진로 상담</a></li>
                    <li><a href="#" onClick={() => handleClick('기타 문의')}>기타 문의</a></li>
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
              <input className="receiver" value={receiverText} onChange={(e) => setReceiverText(e.target.value)}></input>
            </div>
            <div className='emailContainer'>
              <textarea defaultValue={getPlaceholder()}
                className="email"
                onChange={(e) => updateEmailText(e.target.value)}
              ></textarea>
                <div className='buttonContainer2'>
                  <button>메일 생성</button>
                  <button onClick={handleSendEmail}>전송</button>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Main;