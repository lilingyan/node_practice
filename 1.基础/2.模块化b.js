const moduleA = require('./1.模块化a.js');

//后缀可以省略
const moduleA2 = require('./1.模块化a');
console.log(moduleA);

console.log(moduleA.add(1,2));

console.log(moduleA2.add(11,22));