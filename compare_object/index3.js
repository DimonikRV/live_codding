'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
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
  age: 17,
  name: 'Bob',
};
const obj5 = {
  name: 'Bob',
  nage: 17,
};
const obj6 = {
  name: 'Bob',
  age: 17,
  student: false,
};

function compareObjects(firstObj, secondObj) {
  const firstArr = Object.keys(firstObj);
  const secondArr = Object.keys(secondObj);
  // console.log('firstArr', firstArr);
  // console.log('secondArr', secondArr);

  if (firstArr.length !== secondArr.length) {
    return false;
  }
  return firstArr.every(el => {
    console.log(el);
    console.log('firstObj[el]', firstObj[el]);
    console.log('secondObj[el]', secondObj[el]);
    return firstObj[el] === secondObj[el];
  });
}
console.log(compareObjects(obj4, obj5));
