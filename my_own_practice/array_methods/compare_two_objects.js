'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  const firstArr = Object.entries(firstObj).reduce((arr, el) => arr.concat(el));
  const secondArr = Object.entries(secondObj).reduce((arr, el) => arr.concat(el));
  //   console.log(firstArr);
  //   console.log(secondArr);
  secondArr.map(el => {
    if (!firstArr.includes(el)) {
      return false;
    }
  });
  return firstArr.length === secondArr.length;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj3, obj2));
console.log(compareObjects(obj1, obj4));
console.log(compareObjects(obj4, obj5));
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
// console.log(compareObjects(obj4, obj5)); // ==> true
