const input = prompt("Enter number");

if (isNaN(+input) || input === null || input === "") {
  alert("Invalid number");
} else if (+input > 0) {
  alert("Postitive number");
} else if (+input === 0) {
  alert("Zero");
} else if (+input < 0) {
  alert("Negative number");
}
