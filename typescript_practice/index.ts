function add(num1:number, num2:number) {
	console.log(num1 + num2);
}

// add();  // NaN
// undefined + undefined 를 + 연산해서 NaN 을 반환했습니다.
// add(1);  // NaN
// 1 과 undefined 를 + 연산해서 NaN 을 반환했습니다.
add(1, 2);  // 3
// add(4, 5, 6);  // 9
// 3번째 인자는 무시됨
// add('hello', 'world');  // "helloworld"
// 문자열을 받아서 문자열에 대한 + 연산을 했습니다.

// 배열을 입력받아 순차탐색하며 배열 요소를 출력하는 함수
function showItems(arr: number[]) {
	arr.forEach(element => {
		console.log(element);
	});
}

showItems([1, 2, 3]);  // 1, 2, 3
// showItems(1, 2, 3);  // error
// index.js:17 Uncaught TypeError: arr.forEach is not a function
//     at showItems (index.js:17)
//     at index.js:23
