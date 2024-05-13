let sum = 0;
let count = 0;
let input;
do {
  input = prompt("Enter number");

  if (+input > 0) {
    sum += +input;
    count++;
  }
} while (input !== null && input !== "0" && input !== "" && +input > 0);

alert(sum);
alert(sum / count);
