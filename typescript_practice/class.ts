class Car2 {
	protected name: string = "car";
	color: string;
	static wheels = 4;
	// constructor(public color:string) {
	// constructor(readonly color:string) {
	constructor(color: string) {
		this.color = color;
	}
	start() {
		console.log("start");
		console.log(this.name);
	}
}

const ford = new Car2("red");

// 접근제한자(Access modifier) - public, private, protected
class Bmw2 extends Car2{
	constructor(color: string) {
		super(color);
	}
	showName() {
		console.log(this.name);
		console.log(Car2.wheels);
	}
}

const z4 = new Bmw2("black");
// console.log(z4.name);  // protected 라서 외부에서 사용 못합니다.
console.log(Car2.wheels);


// abstract 추상클래스
abstract class Car4 {
	color: string;
	constructor(color:string) {
		this.color = color;
	}
	start() {
		console.log("start");
	}
	abstract doSomeThing(): void;
}

class Benz4 extends Car4 {
	doSomeThing() {
		alert(3);
	}
}
