var car = 'bmw';
var age = 30;
var isAdult = true;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['mon', 'tue', 'wed'];
var b;
b = ['fuck', 69];
// b = [1, 'z'];
b[0].toLocaleLowerCase();
// b[1].toLocaleLowerCase();
// void
function sayHello() {
    console.log("Hello");
}
// never
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something....
    }
}
// enum
// 문자열로 매핑할 수 있습니다. 단, 단방향만 가능합니다.
var Os;
(function (Os) {
    Os["Window"] = "win";
    Os["Ios"] = "ios";
    Os["Android"] = "and";
})(Os || (Os = {}));
var myOs; // Os 타입으로 myOs 변수 선언
myOs = Os.Window;
var Os_num;
(function (Os_num) {
    Os_num[Os_num["Window"] = 3] = "Window";
    Os_num[Os_num["Ios"] = 10] = "Ios";
    Os_num[Os_num["Android"] = 14] = "Android";
})(Os_num || (Os_num = {}));
console.log(Os_num['Ios']); // 10
console.log(Os_num[10]); // Ios
