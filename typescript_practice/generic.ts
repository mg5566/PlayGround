// Generic

function getSize<T>(arr: T[]): number {
	return (arr.length);
}

const arr3 = [1, 2, 3];
getSize<number>(arr3);  // 3

const arr4 = ["a", "b", "c"];
getSize<string>(arr4);  // 3

const arr5 = [false, false, true];
getSize<boolean>(arr5);

const arr6 = [{}, {}, { name: "Tom" }];
getSize<object>(arr6);


interface Mobile2<T> {
	name: string;
	price: number;
	// option: any;
	option: T
}

const m1: Mobile2<object> = {
// const m1: Mobile2<{ color: string, charge: string }> = {
	name: "s21",
	price: 100,
	option: {
		color: "red",
		charge: "충전기"
	}
}

const m2: Mobile2<string> = {
	name: "iphone13 pro",
	price: 130,
	option: "환경보호"
}

interface User4 {
	name: string;
	age: number;
}

interface Car6 {
	name: string;
	color: string;
}

interface Book1{
	price: number;
}

const user4: User4 = { name: "a", age: 10 };
const car6: Car6 = { name: "sm", color: "white" };
const book1: Book1 = { price: 100 };

function showName2<T extends { name: string }>(data: T):string {
	return (data.name);
}

showName2(user4);
showName2(car6);
// showName2(book1);
