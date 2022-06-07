let user = {
  _name: "Guest",  // prefix `_` 를 주의하세요.
  get name() {
    return this._name;
  }
};

// let userProxy = new Proxy(user, {
//   get(target, prop, receiver) {
//     return target[prop]; // (*) target = user
//   }
// });

let userProxy = new Proxy(user, {
  get(target, prop, receiver) { // receiver = admin
    return Reflect.get(target, prop, receiver); // (*)
  }
});


let admin = {
  __proto__: userProxy,
  _name: "Admin"
};

// Expected: Admin
alert(admin.name); // outputs: Guest (?!)
alert(admin._name);  // outputs: Admin