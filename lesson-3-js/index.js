console.log('Hello, JS');

function getSenseOfLife(num) {
  return 42;
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

function getSquared(num) {
  return num ** 2;
}
console.log(getSquared(0));
console.log(getSquared(5));
console.log(getSquared(-7));

function sum(num1, num2) {
  return num1 + num2;
}
console.log('hello', 2);
console.log(0, 2);
console.log(-5, undefined);

function getMessage(age) {
  return console.log(` I am ${age} years old`);
}
getMessage(34);
getMessage('thirty four');
getMessage(-7);

function getMessage2(age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }
  return console.log(` I am ${age} years old`);
}

getMessage2(34);
getMessage2('thirty four');
getMessage2(-7);
getMessage2(0);

const mult = (num1, num2) => num1 * num2;
console.log(mult(34, -7));
console.log(mult('thirty four'));
console.log(mult(-7, 'third'));
console.log(mult(0, -9));

const getMagicNumber = () => 17;
console.log(getMagicNumber());
