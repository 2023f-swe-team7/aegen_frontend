import './Main.css';
import React from 'react';

function Main() {
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
                    <li><a href="#">질문</a></li>
                    <li><a href="#">성적</a></li>
                    <li><a href="#">과제</a></li>
                    <li><a href="#">기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">출결</a>
                  <ul class="subcategory">
                    <li><a href="#">병결</a></li>
                    <li><a href="#">예비군</a></li>
                    <li><a href="#">기타</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">카테고리3</a>
                  <ul class="subcategory">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">카테고리4</a>
                  <ul class="subcategory">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="contentContainer">
              <input placeholder='과목을 선택해 주세요'></input>
              <input placeholder='받는 사람'></input>
            </div>
            
            <div className='emailContainer'>
                <input placeholder='emailContainer'></input>
            </div>
        </div>
    </div>
  );
}
// categoryContainer가 왼쪽에서 카테고리 선택하는 화면인데 내부 구성을 어떻게 해야 할지 모르겠어요 ㅠ
export default Main;
