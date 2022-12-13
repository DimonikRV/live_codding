// const numberList1 = [1, 2, 3, 4, 5];
// const popRes = numberList1.pop();
// console.log(popRes);

// const numberList2 = [1, 2, 3, 4, 5];
// const pushRes = numberList2.push(6);
// console.log(pushRes);

// const numberList3 = [1, 2, 3, 4, 5];
// numberList3.unshift(6);
// console.log(numberList3);

// //////////////////////////////////////////////////////////////////

// const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// const filterRes = anotherNumbersList.filter(el => el > 5);

// console.log(filterRes);
// function filterCallBack(el) {
//   return el > 5;
// }
// сonst numbersList5 = [5, 0, 8, 10, -4, 50, 220];

// const mapRes = numbersList2.map(el => el > 0 ?  el ** 2 : el);
// console.log(mapRes);
// сonst numbersList = [5, 0, 8, 10, -4, 50, 220];
// const findRes = numbersList.find(el => el > 100);
//  сonst numbersList = [5, 0, 8, 10, -4, 50, 220];
// const foreach = numbersList.forEach(el => {
//     if (el > 0) {
//         console.log(el > 0)
//     }
// });
// console,log(el>0? el: 'Error')
 сonst transactions = [5, 0, 8, 10, -4, -50, -100, 220, 1203, 556, 41];

transactions.reduce((sum, el) => el < 0 ? sum + el : sum, 0);
