let target = {
  name: "target",
};

let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    // 기존 프로퍼티를 무시하므로 영향을주지 않습니다.
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError("Property must be a number.");
      }
    }
    // 프로퍼티를 추가합니다.
    return Reflect.set(trapTarget, key, value, receiver);
  },
  get(trapTarget, key, receiver) {
    if (!(key in receiver)) {
      throw new TypeError("Property " + key + " doesn't exist.");
    }
    return Reflect.get(trapTarget, key, receiver);
  },
});

// 새로운 프로퍼티를 추가합니다.
proxy.count = 1;
console.log(proxy.count); // 1
console.log(target.count); // 1
// 이미 대상에 존재하기 때문에 name에 지정할 수 있습니다.
proxy.name = "proxy";
console.log(proxy.name); // "proxy"
console.log(target.name); // "proxy"
// throws an error
proxy.anotherName = "proxy";
// 존재하지 않는 프로퍼티는 에러를 던집니다.
console.log(proxy.nme);             // throws error