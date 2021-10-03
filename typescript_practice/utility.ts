// keyof

interface User10 {
	id: number;
	name: string;
	age: number;
	gender: "m" | "f";
}

type UserKey = keyof User10;  // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "name";

// Partial<T>
// interface User10 {
// 	id?: number;
// 	name?: string;
// 	age?: number;
// 	gender?: "m" | "f";
// }  이렇게 만든 것과 같은 형태입니다.
let admin: Partial<User10> = {
	id: 1,
	name: "Bob",
}

// Required<T>
interface User12 {
	id: number;
	name: string;
	age?: number;
	gender?: "m" | "f";
}
let admin2: Required<User12> = {
	id: 1,
	name: "Bob",
	age: 10,
	gender: "m"
}  // 무조건 다 채워야합니다. optional 도 전부 있어야합니다,

// Readonly<T>
let admin3: Readonly<User12> = {
	id: 1,
	name: "fuck you"
}

// admin3.id = 0;  readonly 라서 수정이 안됩니다.

// Record<K, T>

interface Score10 {
	"1": "A" | "B" | "C" | "F"
	"2": "A" | "B" | "C" | "F"
	"3": "A" | "B" | "C" | "F"
	"4": "A" | "B" | "C" | "F"
}
const score10: Score10 = {
	1: "A",
	2: "C",
	3: "F",
	4: "C"
};

const score5: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "F"> = {
	1: "A",
	2: "C",
	3: "F",
	4: "C"
};  // 위와 같은 기능을 하는 코드가 됐습니다.

type Grade = "1" | "2" | "3" | "4";
type Score14 = "A" | "B" | "C" | "F";
const score6: Record<Grade, Score14> = {
	1: "A",
	2: "C",
	3: "F",
	4: "C"
}  // 더 깔금하게 만들 수도 있습니다.

// Record 활용
interface User20 {
	id: number,
	name: string,
	age: number
}

function isValid(user: User20) {
	const result: Record<keyof User20, boolean> = {
		id: user.id > 0,
		name: user.name !== "",
		age: user.age > 0,
	}
	return (result);
}

// Pick<T, K>
interface Human10 {
	id: number;
	name: string;
	age: number;
	gender: "M"|"W";
}
const admin10: Pick<Human10, "id" | "name"> = {
	id: 0,
	name: "Bob",
}  // Pick 을 사용하여 Human10 의 id, name property 만 사용할 수 있도록 했습니다.

// Omit<T, K> 이번에는 생략기능입니다.
const admin11: Omit<Human10, "age" | "gender"> = {
	id: 0,
	name: "Alice",
}

// Exclude<T1, T2>
// T1 type 에서 T2 에 중복되는 protype 들을 제외하는 기능
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<Type>
// NULL 이랑 undefined 를 제외합니다.
type T3 = string|number|null|undefined|boolean;
type T4 = NonNullable<T3>;
