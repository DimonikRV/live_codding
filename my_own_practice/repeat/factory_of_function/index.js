//put your code here
const createArrayOfFunctions = num => {
  const arr = [];

  if (typeof num === 'undefined') {
    return arr;
  }

  if (typeof num !== 'number') {
    return null;
  }

  for (let index = 0; index < num; index += 1) {
    arr[index] = function () {
      return index;
    };
  }
  return arr;
};

console.log(createArrayOfFunctions(5));
