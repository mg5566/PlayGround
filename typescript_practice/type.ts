
let car:string = 'bmw';

let age:number = 30;
let isAdult:boolean = true;
let arr1:number[] = [1, 2, 3];
let arr2:Array<number> = [1, 2, 3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

let b:[string, number];

b = ['fuck', 69];
// b = [1, 'z'];

b[0].toLocaleLowerCase();
// b[1].toLocaleLowerCase();

// void
function sayHello(): void {
	console.log("Hello");
}

// never
function showError(): never {
	throw new Error();
}

function infLoop(): never {
	while (true) {
		// do something....
	}
}

// enum

// 문자열로 매핑할 수 있습니다. 단, 단방향만 가능합니다.
enum Os {
	Window = 'win',
	Ios = 'ios',
	Android = 'and'
}

let myOs: Os;  // Os 타입으로 myOs 변수 선언

myOs = Os.Window;

enum Os_num {
	Window = 3,
	Ios = 10,
	Android = 14
}

console.log(Os_num['Ios']);  // 10
console.log(Os_num[10]);  // Ios

// null, undefined
let n: null = null;
let u: undefined = undefined;
