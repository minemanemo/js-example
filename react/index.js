// import React from "react";
// import ReactDOM from "react-dom";
// 상단의 import 하는 부분은 index.html에서 link 하였음.

function App() {
  return (
    <div>
      <h1>hello</h1>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
