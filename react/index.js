/** @jsx createElement */
// 위 부분은 React.createElement를 template 대체 할 수 있다.

function renderElement(node) {
  // 해당 노드가 text 인 경우에 대한 예외 처리
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  // type에 해당하는 element를 생성.
  const el = document.createElement(node.type);

  // 하위 element를 render한 후 하위에 추가해 준다.
  // 재귀 함수를 호출하도록 하여 마지막 노드까지 랜더링
  node.children.map(renderElement).forEach((element) => {
    el.appendChild(element);
  });

  // 생성된 Element를 반환.
  return el;
}

function render(newVdom, container) {
  // vdom vs newVdom : diff algorithm
  // 실제로 React는 해당 포인트에서
  // 기존의 old Virtual DOM과 new Virtual DOM의 차이점을
  // 찾아서 변경된 부분만 실제 Real DOM에서 새롭게 rendering 한다.

  container.appendChild(renderElement(newVdom));
}

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

render(<App />, document.getElementById("root"));
