// function

function sayHelloName(name?: string) {
	// 논리연잔자 OR 를 사용하여 name 이 true 면 name 을 사용하고, name 이 false 면 world 가 출력됩니다.
	return (`hello, ${name || "world"}`);
}

const result = sayHelloName();  // Error, 인자가 부족합니다.
// 우리는 인자가 없이도 동작하는 sayHelloName() 을 구현했는데?!
// name?: string 으로 변경합니다.

const result2 = sayHelloName('hello');

function sayHelloName2(name = "world") {
	// 논리연잔자 OR 를 사용하여 name 이 true 면 name 을 사용하고, name 이 false 면 world 가 출력됩니다.
	return (`hello, ${name}`);
}
const result3 = sayHelloName2();
const result4 = sayHelloName2("fucking world");


function add(...nums: number[]) {
	return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3, 4);  // 10
add(1, 2);  // 3


interface Human {
	name: string;
}

const Sam: Human = {
	name: 'sam',
}

/*
function showName(this: Human) {
	console.log(this.name);  // 이때, this 의 타입은 any 라서 빨간줄
}

const sam = showName.bind(Sam);  // bind 를 사용하면 Sam 이 this 가 됩니다. 컨택스트를 잃어버릴 때, 사용하는 기법입니다.
sam();
*/
function showName(this: Human, age: number, gender: 'm'|'f') {
	console.log(this.name);  // 이때, this 의 타입은 any 라서 빨간줄
	console.log(age, gender);
}

const sam = showName.bind(Sam);  // bind 를 사용하면 Sam 이 this 가 됩니다. 컨택스트를 잃어버릴 때, 사용하는 기법입니다.
sam(29, 'm');

interface User2 {
	name: string;
	age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User2;
function join(name: string, age: number | string): User2 | string {
	if (typeof age === 'number') {
		return ({
			name,
			age,
		});
	} else {
		return ('나이는 숫자로 입력해');
	}
}

const jam: User2 = join("Jam", 29);
const nami: string = join("namy", "100");

