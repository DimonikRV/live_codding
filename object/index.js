function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// console.log(addPropertyV1)

function addPropertyV2(obj, key, value) {
  Object.assign(obj, { [key]: value });
  return obj;
}
const obj1 = {};
console.log('before', obj1);
console.log(addPropertyV1(obj1, 'name', 'vasya'));
console.log('after', obj1);

const obj2 = { name: 'vasya' };
console.log('before', obj2);
console.log(addPropertyV1(obj2, 'age', 17));
console.log('after', obj2);

const obj3 = { name: 'vasya' };
console.log('before', obj3);
console.log(addPropertyV1(obj3, 'name', 'vasya'));
console.log('after', obj3);

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
const obj1 = {};
console.log(addPropertyV3(obj1, 'name', 'vasya'));
console.log('after', obj1);

const obj2 = { name: 'vasya' };
console.log(addPropertyV3(obj2, 'age', 17));
console.log('after', obj2);

const obj3 = { name: 'vasya' };
console.log(addPropertyV3(obj3, 'name', 'vasya'));
console.log('after', obj3);

function addPropertyV4(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}
const obj1 = {};
console.log(addPropertyV4(obj1, 'name', 'vasya'));
console.log('after', obj1);

const obj2 = { name: 'vasya' };
console.log(addPropertyV4(obj2, 'age', 17));
console.log('after', obj2);

const obj3 = { name: 'vasya' };
console.log(addPropertyV4(obj3, 'name', 'vasya'));
console.log('after', obj3);
