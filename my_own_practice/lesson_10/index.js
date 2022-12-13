'use strict';

// input:obj
// output: arr of obj

// algo
// 1.create res array
// 2.get key/values
// 3.add new id key to value
// 4.push to the arr
// 5.sort obj by age

// const resArr = [];
// for (let index = 0; index < entries.length; index += 1) {
//  resArr.push({ ...entries[index[1], id:entries[index][0]});
// }

//   resArr.sort((a, b) => a.age - b.age);
//   console.log(resArr);
//   return resArr
// //

function getCustomersList(customers) {
  Object.entries(customers)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);
  console.log(getCustomersList);
}
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
};
