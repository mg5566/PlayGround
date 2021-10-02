var user = {
    name: 'xx',
    age: 30,
    // gender 를 추가하지 않아 에러가 발생합니다.
    // User interface 에서 gender를 옵셔널로 설정했기때문에 없어도 가능
    birthYear: 1993,
    1: 'A',
    2: 'A',
    3: 'C'
};
console.log(user.name);
user.age = 10;
// gender 를 추가해보자
console.log(user.gender);
user.gender = "male"; // 이전에는 error 가 발생했지만 이제 발생안함
console.log(user.gender);
var addNumber = function (x, y) {
    return (x + y);
};
addNumber(10, 20); // 30
var a = function (age) {
    return (age > 19);
};
a(33); // true
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('go');
    };
    return Bmw;
}());
var bmw = new Bmw('red');
console.log(bmw.color);
bmw.start();
var benz = {
    door: 5,
    stop: function () {
        console.log("stop");
    },
    color: "black",
    wheels: 4,
    start: function () {
        console.log("go");
    }
};
