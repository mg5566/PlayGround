var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();

// 결과는?!
// 10, 1 vs 1, 1
// lexical scope 에 의해서 1, 1 이 정답!
