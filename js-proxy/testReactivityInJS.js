let message = "Hello";

let longMessage = message + " World!";

console.log(longMessage);  // Hello World!

message = "Hell";

console.log(longMessage);
// "Hell World!" x
// "Hello World!" o
// reason: JavaScript by default is not reactive


var val1 = 2
var val2 = 3
var sum = val1 + val2

// sum
console.log("sum", sum);  // 5

val1 = 3

// sum
console.log("sum", sum);  // ?
// 6 x
// 5 o
// 이유: JavaScript 는 기본적으로 반응성이 존재하지 않음...