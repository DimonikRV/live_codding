// algo
// 1. create empty obj
// 2.Iterate keyList
// 3. add key/value to the obj
// 4. return obj

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }

// examples

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     obj[key] = valuesList[index];
//     return obj;
//   }, {});
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

const keys = ['name', 'address', 'age', 'name', 'city name', 'start'];
const values = [
  'Bob',
  'Ukraine',
  34,
  'Jann',
  'New York',
  () => {
    console.log('I am starting');
  },
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
