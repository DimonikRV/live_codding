'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  const ordered = obj =>
    Object.keys(obj)
      .sort()
      .reduce((acc, el) => {
        acc[el] = obj[el];
        console.log(acc);
        return acc;
      }, {});
  const sortFirstObj = ordered(firstObj);
  const sortSecondObj = ordered(secondObj);
  return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
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
  ame: 'Tom',
};

console.log(compareObjects(obj5, obj4)); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
// compareObjects(obj4, obj5); // ==> true
