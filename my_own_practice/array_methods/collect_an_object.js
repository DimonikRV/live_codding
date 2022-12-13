'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  let obj = {};

  keysList.reduce((sum, el) => {
    const key = keysList.indexOf(el);
    obj[el] = valuesList[key];
  }, obj);

  //   for (let i = 0; i < keysList.length; i += 1) {
  //     let key = keysList[i];
  //     obj[key] = valuesList[i];
  //     // console.log(obj);
  //   }
  //   return obj; //   return valuesList.reduce((sum, el) => sum.concat(el), keysList);
  return obj;
}
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
// buildObject(keys, values);
console.log(buildObject(keys, values)); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
