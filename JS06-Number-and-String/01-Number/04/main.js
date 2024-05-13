function formatNumberToTwoDigit(num) {
  return (Math.floor((num * 100).toFixed(2)) / 100).toFixed(2);
}

console.log(formatNumberToTwoDigit(10));
console.log(formatNumberToTwoDigit(5.1));
console.log(formatNumberToTwoDigit(3.1289))
