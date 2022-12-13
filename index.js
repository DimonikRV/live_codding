// const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// const result = transactions.reduce((acc, num) => (num >= 100 ? acc + num : acc), 0);

// console.log(result);
//put your code here

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
   intervalId = setInterval((this.secondsPassed.call(this))) =>, 1000);
  },
};

const startTime = timer.startTimer();
console.log(timer.secondsPassed);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(user.getFullName());

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   setFullName() {
//     const arr = this.fullName.split(' ');
// const [firstName, lastName] = arr;
   
//   },
// };
// console.log(user.fullName);
// console.log(user.setFullName());

const filter = (arr, callback) => {
    
}