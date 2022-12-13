// input: array, callback
// output: arr
// alg:
// 1. create result arr;
// 2. iterate arr;
// 3. call callback for each el
// 4. if callback -- true => push el
// 5. return reult arr

const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resultArr.push(el);
    }
  }
  return resultArr;
};

// testData

const arr = [1, 222, 5, 10, 77];

const func = (el, index, arr) => index > 2 && el > 5;

console.log(filterArrayElements(arr, func));

console.log(
  filterArrayElements(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], el =>
    el.toLowerCase().includes('an'),
  ),
);
