import './App.css';
import React, {Component} from 'react'; 

// 함수형 컴포넌트 스타일 
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

// 클래스형 컴포넌트 스타일 
// class App extends Component{
//   render() {
//     return (
//     <div className="App">
//       hello
//     </div>
//     )
//   }
// }

class App extends Component{
  render() {
    return (
    // 컴포넌트 이름에만 집중할 수 있음. 
    <div className="App">
      <Subject></Subject>
      <Toc></Toc>
      <Contents></Contents>
    </div>
    )
  }
}

class Subject extends Component{
  render() {      // 최신 자바스크립트에서는 function을 생략. render 함수
    return (      // 컴포넌트는 하나의 최상위 태그로 감싸야 한다. 
      // jsx(facebook에서 만듦)로 코드를 작성하면, 알아서 브라우저에서 html태그로 인식하여 컨버팅 한다. 
    <header>     
      <h1>Component create test</h1>
      <p>New Component created</p>
    </header>
    )
  }
}

class Toc extends Component{  // Table of contents
  render() {      
    return (     
    <nav>     
      <ul>
        <li><a href="a.html">1. A</a></li>
        <li><a href="b.html">2. B</a></li>
        <li><a href="d.html">3. C</a></li>
      </ul>
    </nav>
    )
  }
}

class Contents extends Component{
  render() {      
    return (      
    <article>     
      <h2> 1. A </h2>
      <p> What is 'A'</p>
    </article>
    )
  }
}

export default App;
