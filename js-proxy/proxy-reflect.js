const obj = { a: 1, b: 2, c: 3 };

const handler = {
  get(target, property, receiver) {
    console.log(
      "target: ",
      target,
      ", property : ",
      property,
      ", receiver: ",
      receiver
    );
    return target[property];
  },
  set(target, property, value, receiver) {
    console.log(
      "target: ",
      target,
      ", property : ",
      property,
      ", value: ",
      value,
      ", receiver: ",
      receiver
    );
    if (typeof value === "number") {
      console.log("value is number type!");
      target[property] = value;
      return true;
    } else {
      console.log("value is not number type!!!!!");
      return false;
    }
  },
};

const proxy = new Proxy(obj, handler);
console.log("obj", obj);
console.log("proxy", proxy);

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.c);
console.log(proxy.c = 4);

// 최종 정리
const targetMap = new WeakMap();

function track(target, key) {
  if (!activeEffect) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }

  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => effect());
  }
}

function reactive(target) {
  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      track(target, key);

      return res;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const res = Reflect.set(target, key, value, receiver);

      if (oldValue !== res) {
        trigger(target, key, value, oldValue);
      }
      return res;
    },
  });

  return proxy;
}

let activeEffect = null;

function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

const numbers = reactive({ a: 1, b: 2 });
const sumFn = () => {
  sum = numbers.a + numbers.b;
};
const multiplyFn = () => {
  multiply = numbers.a * numbers.b;
};

let sum = 0;
let multiply = 0;

effect(sumFn);
effect(multiplyFn);

console.log(`sum: ${sum}, multiply: ${multiply}`);
numbers.a = 10;
console.log(`sum: ${sum}, multiply: ${multiply}`);
