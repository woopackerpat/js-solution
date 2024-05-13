let answer = +prompt("Enter a number");
let count = 0;

if (+answer <= 0 || +answer > 100) {
  alert("Please fill in a number between 1 to 99 ");
} else {
  let guess = +prompt("Enter guess number");

  while (guess !== answer) {
    count++;

    if (guess < answer) {
      alert("Too less");
      guess = +prompt("Enter new guess number");
    } else if (guess > answer) {
      alert("Too many");
      guess = +prompt("Enter new guess number");
    }
  }

  alert("Correct");

  console.log(count + 1);
}
