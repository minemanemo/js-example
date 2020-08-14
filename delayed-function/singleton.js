// (function () {})();

// 즉시 호출 함수 표현식의 형태를 이용해서
// timer 라는 private 한 변수를 사용할 수 있도록함.

// 함수 구현
const delayed = (() => {
  let timer = 0;
  return (callback, ms) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
    return;
  };
})();

exports.delayed = delayed;