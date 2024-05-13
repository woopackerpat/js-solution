const input = prompt("Enter number");

if (input === null || isNaN(+input) || input.trim() === "") {
  if (input % 2 === 0) {
    alert("Even number");
  } else {
    alert("Odd number");
  }
} else {
  alert("invalid number");
}
