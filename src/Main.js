import './Main.css';
import React, { useState } from 'react';

function Main() {
  const [state, setState] = useState('');

  const handleClick = (value) => {
    setState(value);
  };

  const getPlaceholder = () => {
    switch(state) {
      case '질문':
        return '질문';
      case '시험':
        return '시험';
      case '결석':
        return '결석';
      case '병결':
        return '병결';
      case '예비군':
        return '예비군';
      case '가족상':
        return '가족상';
      case '제출':
        return '제출';
      case '점수 문의':
        return '점수 문의';
      case '연구실 면담':
        return '연구실 면담';
      case '진로 상담':
        return '진로 상담';
      case '기타 문의':
        return '기타 문의';
      case '기타':
        return '기타';
      default:
        return '';
    }
  };

  return (
    <div className="Main">
        <div className='header'>
            <h2>AEGEN</h2>
        </div>
        <div className='mainContainer'>
            <div className="categoryContainer">
              <ul class="category">
                <li>
                  <a href="#">수업</a>
                  <ul class="subcategory">
                    <li><a href="#" onClick={() => handleClick('질문')}>질문</a></li>
                    <li><a href="#" onClick={() => handleClick('시험')}>시험</a></li>
                    <li><a href="#" onClick={() => handleClick('결석')}>결석</a></li>
                    <li><a href="#" onClick={() => handleClick('기타')}>기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">출결</a>
                  <ul class="subcategory">
                    <li><a href="#" onClick={() => handleClick('병결')}>병결</a></li>
                    <li><a href="#" onClick={() => handleClick('예비군')}>예비군</a></li>
                    <li><a href="#" onClick={() => handleClick('가족상')}>가족상</a></li>
                    <li><a href="#" onClick={() => handleClick('기타')}>기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">과제</a>
                  <ul class="subcategory">
                    <li><a href="#" onClick={() => handleClick('제출')}>제출</a></li>
                    <li><a href="#" onClick={() => handleClick('점수 문의')}>점수 문의</a></li>
                    <li><a href="#" onClick={() => handleClick('질문')}>질문</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">기타</a>
                  <ul class="subcategory">
                    <li><a href="#" onClick={() => handleClick('연구실 면담')}>연구실 면담</a></li>
                    <li><a href="#" onClick={() => handleClick('진로 상담')}>진로 상담</a></li>
                    <li><a href="#" onClick={() => handleClick('기타 문의')}>기타 문의</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="contentContainer">
              <input placeholder='과목을 선택해 주세요'></input>
              <input placeholder='받는 사람'></input>
            </div>
            
            <div className='emailContainer'>
              <input placeholder={getPlaceholder()}></input>
            </div>
        </div>
    </div>
  );
}

export default Main;