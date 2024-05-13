let balance = 100_000;

for (let i = 0; i < 10; i++) {
  balance = balance + (2.5 * balance) / 100;
}

console.log(balance.toFixed(2));
