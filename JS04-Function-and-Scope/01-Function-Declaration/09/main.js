function isPrime(target) {
  for (let i = 2; i < target; i++) {
    if (target % i === 0) {
      return false;
    }
  }

  return true;
}

function showPrimeNumber(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

showPrimeNumber(40);


