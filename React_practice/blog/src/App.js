import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "강남 고기 맛집";
  let custom_style = { color : 'blue', fontSize : '30px' };
//   document.getElementById().innerHTML = '';
  function print_num(num) {
	  return (num);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>지속가능한 개발 Blog</div>
      </div>
	  <h4 style={ custom_style }>블로그 글 { posts }</h4>
	  {/* <h4 style={ { color : 'blue', fontSize : '30px' } }>블로그 글 { posts }</h4> */}
	  {/* <h4 style="font-size : 16px">블로그 글 { posts }</h4> */}
	  <h4>{ print_num(100) }</h4>
	  {/* <img src="logo.svg" /> */}
	  <img src={ logo }/>
    </div>
  );
}

export default App;
