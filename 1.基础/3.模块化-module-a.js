const greeting = name => `hello ${name}`;
const x = 100;
exports.x = x;
module.exports.greeting = greeting;


// module.exports 与 exports区别
// exports 是 module.exports 的别名
// 一般都是指向同一个，如果不一样，已 module.exports 为准
// 例如         获取的是这个
// module.exports = {
//     name : 'zhangsan';
// }

// 这样就不生效了
// exports = {
//     name : 'zhangsan';
// }