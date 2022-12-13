// const getTotalRevenue = transactions => {
//   return transactions
//     .map(trans => Object.entries(trans))
//     .reduce((sum, trans) => sum.concat(trans))
//     .filter(item => item[0] === 'amount')
//     .map(amount => amount[1])
//     .reduce((sum, amount) => sum + amount);
// };
const getTotalRevenue = transactions => {
  return transactions.reduce((sum, elem) => elem['amount'] + sum, 0);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(getTotalRevenue(dayTransactions));
