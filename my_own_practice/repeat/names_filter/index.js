function filterNames(arr, text) {
  return arr.filter(el => el.length > 5).filter(el => el.includes(text));
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Nastya', 'Kya'], 'ya'));

// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const filterArr = array.filter((el, index) => index === array.indexOf(el));
//   return filterArr;
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 3, 2, 68, 7]));
