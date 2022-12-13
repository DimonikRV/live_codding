'use strict';
// alg
// make a function to defind equality
// get arrays of pairs key/value
// use loop to find equality pairs
// create new array
// if equal - push to new array
// return compare length of new array and first arr

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
  age: 17,
};
const obj6 = {
  name: 'Bob',
  age: 17,
  student: false,
};

function compareObjects(firstObj, secondObj) {
  const firstArr = Object.entries(firstObj);
  const secondArr = Object.entries(secondObj);
  // console.log('firstArr', firstArr);
  // console.log('secondArr', secondArr);

  if (firstArr.length !== secondArr.length) {
    return false;
  }
  // return firstArr.filter((el, index) => isEqual(el, secondArr[index]));
  let res = [];
  for (let i = 0; i < firstArr.length; i += 1) {
    // console.log('firstArr[i] :', firstArr[i]);
    for (let j = 0; j < secondArr.length; j += 1) {
      // console.log('secondArr[j] :', secondArr[j]);
      if (isEqual(firstArr[i], secondArr[j])) {
        res.push(firstArr[i]);
      }
    }
  }
  return res.length === firstArr.length;
}
console.log(compareObjects(obj6, obj3));

function isEqual(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1];
}
// isEqual(testArr, testArr2);
// console.log(compareObjects(obj4, obj5));
// examples
