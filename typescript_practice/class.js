var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car2 = /** @class */ (function () {
    // constructor(public color:string) {
    // constructor(readonly color:string) {
    function Car2(color) {
        this.name = "car";
        this.color = color;
    }
    Car2.prototype.start = function () {
        console.log("start");
        console.log(this.name);
    };
    Car2.wheels = 4;
    return Car2;
}());
var ford = new Car2("red");
// 접근제한자(Access modifier) - public, private, protected
var Bmw2 = /** @class */ (function (_super) {
    __extends(Bmw2, _super);
    function Bmw2(color) {
        return _super.call(this, color) || this;
    }
    Bmw2.prototype.showName = function () {
        console.log(this.name);
        console.log(Car2.wheels);
    };
    return Bmw2;
}(Car2));
var z4 = new Bmw2("black");
// console.log(z4.name);  // protected 라서 외부에서 사용 못합니다.
console.log(Car2.wheels);
// abstract 추상클래스
var Car4 = /** @class */ (function () {
    function Car4(color) {
        this.color = color;
    }
    Car4.prototype.start = function () {
        console.log("start");
    };
    return Car4;
}());
var Benz4 = /** @class */ (function (_super) {
    __extends(Benz4, _super);
    function Benz4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Benz4.prototype.doSomeThing = function () {
        alert(3);
    };
    return Benz4;
}(Car4));
