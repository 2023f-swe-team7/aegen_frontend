import './Main.css';
import React, { useState } from 'react';
import axios from 'axios';
function Main() {
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');
  const [emailText, setEmailText] = useState('');
  const [emailTopic, setEmailTopic] = useState('');
  const [professorEmail, setprofessorEmail] = useState('');
  const email1 = `안녕하세요, 차수영 교수님,
    
저는 현재 교수님의 소프트웨어공학개론[SWE3002_42] 수업을 듣고 있는 소프트웨어학과의 김도연(2019312123)이라고 합니다.
      
제가 가까운 친척의 장례식에 참석해야 하는 사정이 생겨 이로 인해 이번 수업에 참석하는 것이 어려울 것 같습니다. 
관련해서 제 출결이 어떻게 처리되는지 여쭈어보고 싶습니다.
      
관련한 문서를 아래 첨부하오니 참고해주시면 감사하겠습니다.
      
감사합니다.
      
김도연 올림`

  const email2 = `안녕하세요, 엄영익 교수님,

저는 [운영체제] 수업을 듣고 있는 소프트웨어학과 학과의 [2019312123] 김도연입니다.

제가 최근에 제출한 HW2 과제에 대한 성적을 확인하고 싶습니다. 
과제 성적과 관련하여 4번 문제에서 감점된 부분에 질문이 있어 확인을 요청드리고 싶습니다. 감사합니다.

김도연 올림`;

  const accessToken = localStorage.getItem('accessToken');

  const handleClick = (value) => {
    setState(value);
  };

  function handleCategory(value) {
    setCategory(value);
  }

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

      const response = await axios.post('https://aegen.scg.skku.ac.kr/v1/mail/send', {
        receiver: "kimdozz01@gmail.com",
        subject: "[SWE3004_42] 과제 성적 문의",
        // [SWE3004_42] 과제 성적 문의
        text: email2
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
                    <li><a href="#" onClick={(e) => {handleClick('과제제출'); handleCategory('과제 > 제출')}}>제출</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('과제성적문의'); handleCategory('과제 > 점수 문의')}}>점수 문의</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('과제질문'); handleCategory('과제 > 질문')}}>질문</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">기타</a>
                  <ul className="subcategory">
                    <li><a href="#" onClick={(e) => {handleClick('연구실면담'); handleCategory('기타 > 연구실 면담')}}>연구실 면담</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('진로상담'); handleCategory('기타 > 진로 상담')}}>진로 상담</a></li>
                    <li><a href="#" onClick={(e) => {handleClick('기타문의'); handleCategory('기타 > 기타 문의')}}>기타 문의</a></li>
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