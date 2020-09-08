/** @jsx createElement */
// 위 부분은 React.createElement를 template 대체 할 수 있다.

function createElement(type, props = {}, ...children) {
  // type이 funtion인 경우 예외 처리
  if (typeof type === "function") {
    return type.apply(null, [props, ...children]);
  }

  return { type, props, children };
}

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

console.log(<App />);
