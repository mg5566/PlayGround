const person = {
  // data property
  name: 'Kang',
  age: 29,

  // accessor property
  get info() {
    return `${this.name}, age: ${this.age}`
  },

  set info(name) {
    this.name = name;
  },
};

// person.age = 29;

console.log(Object.getOwnPropertyDescriptor(person, 'age'));
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

console.log(Object.getOwnPropertyDescriptors(person));

console.log('info', person.info);

person.info = 'Ka';

console.log('new info', person.info);
console.log(Object.getOwnPropertyDescriptors(person));
