const singleton = require('./singleton.js');
const testFunc = require('./testfunction.js');

const { delayed } = singleton;
const { test } = testFunc;

// example 1
delayed(() => test("test1"), 1000);
delayed(() => test("test2"), 1000);

// output
// [2020-08-14 10:04:07] test2
