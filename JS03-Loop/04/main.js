let sum = 0;
let sumEven = 0;
let sumOdd = 0;
let result = 0;

for (let i = 1; i <= 100; i++) {
  //   sum = sum + i;
  sum += i;

  if (i % 2 === 0) {
    sumEven += i;
    result += i ** 2;
  } else {
    sumOdd += i;
  }

  if (i % 3 === 0) {
    result -= i ** 2;
  }
}

console.log(sum);
console.log(sumEven);
console.log(sumOdd);
console.log(result);
