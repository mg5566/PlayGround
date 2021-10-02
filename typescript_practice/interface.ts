type Score = 'A' | 'B' | 'C' | 'F';

interface User {
	name: string;
	age: number;
	// gender 추가
	gender?: string;  // optional
	readonly birthYear: number;  // 수정 불가능
	/*
	1: string
	2: string
	3: string
	4: string  // 이때 4가 없으면 에러가 발생할 수 있음.
	*/
	// 이렇게 사용하면 학점의 범위가 너무 큽니다.
	// [grade: number]: string;  // 문자열 인덱스 서명
	[grade: number]: Score;  // Score type 만 학점으로 사용 가능해집니다.

}

let user : User = {
	name: 'xx',
	age: 30,
	// gender 를 추가하지 않아 에러가 발생합니다.
	// User interface 에서 gender를 옵셔널로 설정했기때문에 없어도 가능
	birthYear: 1993,
	1: 'A',
	2: 'A',
	3: 'C',
}

console.log(user.name);

user.age = 10;

// gender 를 추가해보자
console.log(user.gender);
user.gender = "male";  // 이전에는 error 가 발생했지만 이제 발생안함

console.log(user.gender);

// user.birthYear = 2000;  // interface 에서 readonly 로 선언해서 수정 불가능


// function interface
interface Add {
	(num1: number, num2: number): number;  // () 에 인자 (): number 로 return 값 타입
}

const addNumber : Add = function(x, y) {
	return (x + y);
}

addNumber(10, 20);  // 30

interface IsAdult {
	(age: number): boolean;
}

const a:IsAdult = (age) => {
	return (age > 19);
}

a(33);  // true


// class interface
// implements
interface Car {
	color: string;
	wheels: number;
	start(): void;
}

class Bmw implements Car {
	color;
	wheels = 4;

	constructor(c: string) {
		this.color = c;
	}

	start() {
		console.log('go');
	}
}

const bmw = new Bmw('red');
console.log(bmw.color);
bmw.start();

// extends
interface Benz extends Car {
	door: number;
	stop(): void;
}

const benz : Benz = {
	door: 5,
	stop() {
		console.log("stop");
	},
	color: "black",
	wheels: 4,
	start(){
		console.log("go");
	}
}

// 여러개 extends
interface Toy {
	name: String;
}

interface ToyCar extends Car, Toy {
	price: number;
}

