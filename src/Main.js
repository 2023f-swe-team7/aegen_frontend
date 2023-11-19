import './Main.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [state, setState] = useState('');
  const [emailText, setEmailText] = useState('');

  const handleClick = (value) => {
    setState(value);
  };

  const getPlaceholder = () => {
    if(receiverText == "차수영") {
      switch(state) {
        case '질문':
          return '제목: 소프트웨어공학개론 수업 관련 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n이번 수업을 듣던 도중 궁금한 내용이 생겨 연락드렸습니다. \n———— 수업 관련 질문 ————- \n혼자 찾아보고 고민해봤지만 답이 나오지 않아 교수님께 여쭈어보는게 가장 정확할 것 같아서 질문을 하게 되었습니다. \n감사합니다. \n김율전 올림';
        case '시험':
          return '제목: 소프트웨어공학개론 시험 관련 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n이번 시험에 대해 궁금한 내용이 생겨 연락드렸습니다. \n———— 시험 관련 질문 ————- \n감사합니다. \n김율전 올림';
        case '병결':
          return '제목: 소프트웨어공학개론 수업 결석 관련 문의(질병) \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456라고 합니다. \n다름이 아니라 제가 최근에 질병을 앓게 되었고, 이로 인해 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 이번 결석을 병결로 처리해주실 수 있는지 여쭈어보고 싶습니다. \n제 상황으로 인해 교수님께 불편함을 드려 죄송합니다. 관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '예비군':
          return '제목: 소프트웨어공학개론 수업 결석 관련 문의(예비군) \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 이번에 예비군 훈련 일정과 수업 일정이 겹쳐 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 출결이 어떻게 처리되는지 여쭈어보고 싶습니다. 관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '가족상':
          return '제목: 소프트웨어공학개론 수업 결석 관련 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 가까운 친척의 장례식에 참석해야 하는 사정이 생겨 이로 인해 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 제 출결이 어떻게 처리되는지 여쭈어보고 싶습니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '제출':
          return '제목: 소프트웨어공학개론 과제 제출 관련 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 [] 과제를 제출하려고 하는데, 제출 방법 및 마감일에 대한 안내를 부탁드립니다. \n또한 과제와 관련한 기타 지침이나 추가 요구 사항이 있는지 알려주실 수 있을까요? \n감사합니다. \n김율전 올림';
        case '점수 문의':
          return '제목: 소프트웨어공학개론 과제 성적 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 최근에 제출한 [] 과제에 대한 성적을 확인하고 싶습니다. \n과제 성적과 관련하여 []한 부분에 질문이 있어 확인을 요청드리고 싶습니다. \n감사합니다. \n김율전 올림';
        case '연구실 면담':
          return '제목: 연구실 면담 요청 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n연구 관련 질문 및 미래 계획에 대한 조언을 구하고 싶습니다. 저는 []시간에 방문이 가능합니다. \n감사합니다. \n김율전 올림';
        case '진로 상담':
          return '제목: 진로 상담 요청 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제 진로에 관한 고민이 있어 교수님께 면담을 요청드리고 싶습니다. []한 고민이 있어 []한 부분에 대해서 교수님의 의견이나 조언을 듣고 싶습니다. \n저는 []한 시간에 방문이 가능합니다. \n바쁘신 줄 알기에 더욱 죄송하지만, 가능한 시간을 알려주시면 찾아뵙고 어떠한 말씀이라도 도움이 될 것 같습니다. \n감사합니다. \n김율전 올림';
        case '기타 문의':
          return '제목: 기타 문의 사항 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n[문의 내용]에 관해 교수님의 의견이나 조언을 듣고 싶습니다. \n부디 답변해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '기타':
          return '제목: 소프트웨어공학개론 수업 결석 관련 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n[기타 결석 사유] 관련해서 제 출결이 어떻게 처리되는지 여쭈어보고 싶습니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        default:
          return '';
      }
    } else {
      switch(state) {
        case '질문':
          return '제목: 운영체제 수업 관련 문의 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n이번 수업을 듣던 도중 궁금한 내용이 생겨 연락드렸습니다. \n———— 수업 관련 질문 ————-\n 혼자 찾아보고 고민해봤지만 답이 나오지 않아 교수님께 여쭈어보는게 가장 정확할 것 같아서 질문을 하게 되었습니다. \n감사합니다. \n김율전 올림';
        case '시험':
          return '제목: 운영체제 시험 관련 문의 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n이번 시험에 대해 궁금한 내용이 생겨 연락드렸습니다. \n———— 시험 관련 질문 ————-\n감사합니다. \n김율전 올림';
        case '병결':
          return '제목: 운영체제 수업 결석 관련 문의(질병) \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456라고 합니다. \n다름이 아니라 제가 최근에 질병을 앓게 되었고, 이로 인해 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 이번 결석을 병결로 처리해주실 수 있는지 여쭈어보고 싶습니다. \n제 상황으로 인해 교수님께 불편함을 드려 죄송합니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '예비군':
          return '제목: 운영체제 수업 결석 관련 문의(예비군) \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 이번에 예비군 훈련 일정과 수업 일정이 겹쳐 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 출결이 어떻게 처리되는지 여쭈어보고 싶습니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '가족상':
          return '제목: 운영체제 수업 결석 관련 문의 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 가까운 친척의 장례식에 참석해야 하는 사정이 생겨 이로 인해 이번 수업에 참석하는 것이 어려울 것 같습니다. \n관련해서 제 출결이 어떻게 처리되는지 여쭈어보고 싶습니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '제출':
          return '제목: 운영체제 과제 제출 관련 문의 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 [] 과제를 제출하려고 하는데, 제출 방법 및 마감일에 대한 안내를 부탁드립니다. \n또한 과제와 관련한 기타 지침이나 추가 요구 사항이 있는지 알려주실 수 있을까요? \n감사합니다. \n김율전 올림';
        case '점수 문의':
          return '제목: 소프트웨어공학개론 과제 성적 문의 \n안녕하세요, 차수영 교수님, \n저는 현재 교수님의 소프트웨어공학개론 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제가 최근에 제출한 [] 과제에 대한 성적을 확인하고 싶습니다. \n과제 성적과 관련하여 []한 부분에 질문이 있어 확인을 요청드리고 싶습니다. \n감사합니다. \n김율전 올림';
        case '연구실 면담':
          return '제목: 연구실 면담 요청 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n연구 관련 질문 및 미래 계획에 대한 조언을 구하고 싶습니다. 저는 []시간에 방문이 가능합니다. \n감사합니다. \n김율전 올림';
        case '진로 상담':
          return '제목: 진로 상담 요청 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n제 진로에 관한 고민이 있어 교수님께 면담을 요청드리고 싶습니다. \n[]한 고민이 있어 []한 부분에 대해서 교수님의 의견이나 조언을 듣고 싶습니다. 저는 []한 시간에 방문이 가능합니다. \n바쁘신 줄 알기에 더욱 죄송하지만, 가능한 시간을 알려주시면 찾아뵙고 어떠한 말씀이라도 도움이 될 것 같습니다. \n감사합니다. \n김율전 올림';
        case '기타 문의':
          return '제목: 기타 문의 사항 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n[문의 내용]에 관해 교수님의 의견이나 조언을 듣고 싶습니다. 부디 답변해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        case '기타':
          return '제목: 운영체제 수업 결석 관련 문의 \n안녕하세요, 서의성 교수님, \n저는 현재 교수님의 운영체제 수업을 듣고 있는 소프트웨어학과의 김율전(학번: 2021123456)라고 합니다. \n[기타 결석 사유] 관련해서 제 출결이 어떻게 처리되는지 여쭈어보고 싶습니다. \n관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다. \n감사합니다. \n김율전 올림';
        default:
          return '';
      }
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
    if(subject == "소프트웨어공학개론") {
      setReceiverText("차수영");
    } else {
      setReceiverText("서의성");
    }
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
              <input className="receiver" defaultValue={receiverText}></input>
            </div>
            <div className='emailContainer'>
              <textarea defaultValue={getPlaceholder()}
                className="email"
                onChange={(e) => updateEmailText(e.target.value)}
              ></textarea>
                <button onClick={handleSendEmail}>전송</button>
            </div>
        </div>
    </div>
  );
}

export default Main;