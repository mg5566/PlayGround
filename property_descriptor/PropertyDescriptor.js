const person = {
  name: 'Kang',
};

person.age = 29;

console.log(Object.getOwnPropertyDescriptor(person, 'age'));
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

console.log(Object.getOwnPropertyDescriptors(person));
