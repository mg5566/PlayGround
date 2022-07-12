function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
    console.log("score", this.score);
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Kang", 5);

console.log(user1);
user1.increment();
console.log(user1);
console.log(user2);

function Person(name, gender) {
  var married = true;         // private
  this.name = name;           // public
  this.gender = gender;       // public
  this.sayHello = function () { // public
    console.log('Hi! My name is ' + this.name);
  };
}

function Person(name, gender) {
  var married = true;         // private
  this.name = name;           // public
  this.gender = gender;       // public
  this.sayHello = function () { // public
    console.log('Hi! My name is ' + this.name);
  };
}

var person = new Person('Lee', 'male');

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.sayHello());
console.log(person.gender);  // 'male'
console.log(person.married); // undefined

const obj = {
  a: 2,
};

const anotherObj = Object.create(obj);
console.log("another Object", anotherObj);
console.log("another Object proto", anotherObj.__proto__);