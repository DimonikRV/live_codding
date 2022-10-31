// algo
// 1.iterate 2...num +++
// 2.check if number is prime
//    2.0create counter
//    2.1iterate 1...number
//    2.2 if number % index === 0 --> count ++
//    2.3 if counter >= 2 --> is not prime
// 3.if prime --> console

// input:number
// output:underfind

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    let counter = 0;
    for (let index = 2; index <= number; index += 1) {
      if (number % index === 0) {
        counter += 1;
      }
    }
    if (counter === 1) {
      console.log(number);
    }
  }
}

console.log(getPrimes(10));
console.log(getPrimes(11));
console.log(getPrimes(15));
