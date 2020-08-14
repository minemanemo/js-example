const singleton = require('./singleton.js');
const testFunc = require('./testfunction.js');

const { delayed } = singleton;
const { test } = testFunc;

// example 2
delayed(() => test("test1"), 1000);
setTimeout(() => delayed(() => test("test2"), 1000), 3000);

// output
// [2020-08-14 10:05:32] test1
// [2020-08-14 10:05:35] test2
