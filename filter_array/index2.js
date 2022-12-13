const mapArrayElements = (arr, callback) => {
  const changedArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];

    changedArr.push(callback(el, index, arr));
  }
  return changedArr;
};

console.log(mapArrayElements([1, 2, 3, 4, 5, 6, 7], (el, index, arr) => el * 2));
