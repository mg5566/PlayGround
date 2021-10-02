// function
function sayHelloName(name) {
    // 논리연잔자 OR 를 사용하여 name 이 true 면 name 을 사용하고, name 이 false 면 world 가 출력됩니다.
    return ("hello, " + (name || "world"));
}
var result = sayHelloName(); // Error, 인자가 부족합니다.
// 우리는 인자가 없이도 동작하는 sayHelloName() 을 구현했는데?!
// name?: string 으로 변경합니다.
var result2 = sayHelloName('hello');
function sayHelloName2(name) {
    if (name === void 0) { name = "world"; }
    // 논리연잔자 OR 를 사용하여 name 이 true 면 name 을 사용하고, name 이 false 면 world 가 출력됩니다.
    return ("hello, " + name);
}
var result3 = sayHelloName2();
var result4 = sayHelloName2("fucking world");
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
add(1, 2, 3, 4); // 10
add(1, 2); // 3
var Sam = {
    name: 'sam'
};
/*
function showName(this: Human) {
    console.log(this.name);  // 이때, this 의 타입은 any 라서 빨간줄
}

const sam = showName.bind(Sam);  // bind 를 사용하면 Sam 이 this 가 됩니다. 컨택스트를 잃어버릴 때, 사용하는 기법입니다.
sam();
*/
function showName(age, gender) {
    console.log(this.name); // 이때, this 의 타입은 any 라서 빨간줄
    console.log(age, gender);
}
var sam = showName.bind(Sam); // bind 를 사용하면 Sam 이 this 가 됩니다. 컨택스트를 잃어버릴 때, 사용하는 기법입니다.
sam(29, 'm');
function join(name, age) {
    if (typeof age === 'number') {
        return ({
            name: name,
            age: age
        });
    }
    else {
        return ('나이는 숫자로 입력해');
    }
}
var jam = join("Jam", 29);
var nami = join("namy", "100");
