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

// function getPrimes(num) {
//   for (let number = 2; number <= num; number += 1) {
//     let isPrime = true;
//     for (let index = 2; index < number; index += 1) {
//       if (number % index === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }
// console.log(getPrimes(10));

// function isPrime(number) {
//   let counter = 0;

//    for (let index = 1; index <= number; index += 1) {
//      if (number % index === 0) {
//        counter+=1;
//      }
//   }
//   return counter === 2;
// }
// function getPrimes(num) {
//   for (let number = 2; number <= num; number += 1) {
//     if (isPrime(number)) {
//       console.log(number)
//     }
//   }
// }

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}
