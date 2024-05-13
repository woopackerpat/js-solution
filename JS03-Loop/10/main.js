for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  if (i === 2) {
    console.log(i);
  }

  if (i % 2 !== 0) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      console.log(i);
    }
  }
}
