// Literal Types

const userName1 = "Bob";
let userName2: string|number = "Tom";

userName2 = 3;

// union 을 사용해보자
type Job = "police"|"developer"|"teacher";

interface User3 {
	name: string;
	job: Job;
}

const user3 : User3 = {
	name : "Bob",
	job: "developer"
}

interface HighSchoolStudent {
	name: string;
	grage: 1| 2| 3;  // union type
}

// 교차타입
interface Computer {
	// name: "computer";
	color: string;
	boot(): void;
}

interface Mobile {
	// name: "mobile";
	color: string;
	call(): void;
}

/*
function getGift(gift: Computer | Mobile) {
	console.log(gift.name);
	if (gift.name === "computer")
		gift.boot();
	else if (gift.name === "mobile")
		gift.call();  // error 가 발생합니다 ㅠ
}
*/

const gift: Computer & Mobile = {
	color : "red",
	boot() {},
	call() {},
};
