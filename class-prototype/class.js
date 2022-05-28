/*
// 생성자 함수 Constructor
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
};
Circle.prototype.name = "Circle Class";
*/
class Circle {
	// 생성자 함수
	constructor (radius) {
	  this.radius = radius;
	}

	getArea() {
		return Math.PI * this.radius ** 2;
	}

	name = "Circle Class";
}
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1 === circle2);
console.log(circle1.getArea());
console.log(circle1.name);
console.log(circle2.getArea());
console.log(circle1.name);

// Prototype 접근자
console.log(circle1.__proto__);  // { getArea: [Function (anonymous)], name: 'Circle Class' }

console.log(circle1.__proto__ === Circle.prototype);  // true
console.log(Circle.prototype.constructor);  // Function Circle
