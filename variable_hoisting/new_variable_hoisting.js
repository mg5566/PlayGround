console.log(score);  // undefined

// 할당을 먼저
score = 80;
var score;

// 그래도 결과는 80
console.log(score);  // 80
/*
   이유: variable hoisting
   변수의 선언은 런타임 이전에 먼저 실행되기 때문에
*/

