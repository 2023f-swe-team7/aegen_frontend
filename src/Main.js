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
            </div>
            <input placeholder='과목을 선택해 주세요'></input>
            <input placeholder='받는 사람'></input>
            <div className='emailContainer'>
                <input></input>
            </div>
        </div>
    </div>
  );
}
// categoryContainer가 왼쪽에서 카테고리 선택하는 화면인데 내부 구성을 어떻게 해야 할지 모르겠어요 ㅠ
export default Main;
