// Task 1 Delete dublicates from sorted Array

// const arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6];

// function delDublicates(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arr[i - 1]) {
//       arr.splice(i, 1);

//       i -= 1;
//     }
//   }
//   return arr;
// }
// console.log(delDublicates(arr));
// ===================================================================================================

// Task 2 Delete dublicates from Array

// const consumers = ['Ann', 'Tom', 'Ann', 'Mike', 'Ann'];

// function getPrimes(consumers) {
//   return [...new Set(consumers)];
// }
// console.log(getPrimes(consumers));

// function getPrimes(consumers) {
//   return Array.from(new Set(consumers));
// }
// console.log(getPrimes(consumers));

// function getPrimes(consumers) {
//   const uniqArr = consumers.filter((el, index) => index === consumers.indexOf(el));
//   return uniqArr;
// }

// console.log(getPrimes(consumers));
