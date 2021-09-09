/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

//   let [subject, change_subject] = useState('남자 코트 추천');  // useState 는 [a, b] 이렇게 생긴 배열입니다.
  let [subject, change_subject] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']);
  let [count, change_count] = useState(0);
//   let posts = "강남 고기 맛집";
  let custom_style = { color : 'blue', fontSize : '30px' };
//   document.getElementById().innerHTML = '';
  function print_num(num) {
	  return (num);
  }

  function change_subject_func() {
	var newArr = [...subject];
	newArr[0] = "여자 코트 추천";
	// newArr.sort();  오 이런것도 가능하다니 ㅎㅎ
	change_subject(newArr);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>지속가능한 개발 Blog</div>
      </div>
	  {/* <button onClick={ ()=>{ change_subject(['여자 코트 추천', '강남 우동 맛집', '강남 고기 맛집'])} }>state 변경 버튼</button> */}
	  {/* change_subject_func() 하면 바로 호출되기 때문에 ()는 제거하세요 */}
	  <button onClick={ change_subject_func }>state 변경 버튼</button>

	  {/* <h4 style={ custom_style }>블로그 글 { posts }</h4> */}
	  {/* <h4 style={ { color : 'blue', fontSize : '30px' } }>블로그 글 { posts }</h4> */}
	  {/* <h4 style="font-size : 16px">블로그 글 { posts }</h4> */}
	  <h4>{ print_num(100) }</h4>
	  {/* <img src="logo.svg" /> */}
	  {/* <img src={ logo }/> */}
	  <div className="list">
		<h3> { subject[0] } <span onClick={ ()=>{ change_count(++count) } }>👍</span> { count } </h3>  {/* 강남 고기 맛집 */}
		<p>2021.09.09 목요일 발행</p>
		<hr/>
	  </div>
	  <div className="list">
		<h3> { subject[1] } </h3>  {/* 강남 고기 맛집 */}
		<p>2021.09.09 목요일 발행</p>
		<hr/>
	  </div>
	  <div className="list">
		<h3> { subject[2] } </h3>  {/* 강남 고기 맛집 */}
		<p>2021.09.09 목요일 발행</p>
		<hr/>
	  </div>

	  {/* model view */}
	  {/* <div className="model">
		  <h2>Subject</h2>
		  <p>Date</p>
		  <p>Body</p>
	  </div> */}
	  <Model></Model>

    </div>
  );
}

// Component
function Model() {
	return (
	<div className="model">
		<h2>Subject</h2>
		<p>Date</p>
		<p>Body</p>
	</div>
	);
}

export default App;
