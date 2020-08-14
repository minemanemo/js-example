// 테스트에 사용될 현 시간과 같이 메세지를 출력
const testFunc = (msg) => {
  String.prototype.zf = function(len) {
    return "0".repeat(len - this.length) + this;
  };
  Number.prototype.zf = function (len) {
    return this.toString().zf(len);
  };

  const _date = new Date();

  const year = _date.getFullYear();
  const month = (1 + _date.getMonth()).zf(2); 
  const day = (_date.getDate()).zf(2);
  const hour = _date.getHours().zf(2);
  const minute = _date.getMinutes().zf(2);
  const sec = _date.getSeconds().zf(2);

  console.log(`[${year}-${month}-${day} ${hour}:${minute}:${sec}] ${msg}`);
};

exports.test = testFunc;