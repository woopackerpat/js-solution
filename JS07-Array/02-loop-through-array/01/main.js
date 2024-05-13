// Function check is number
function isNumber(num) {
  const strInput = "" + num;
  if (!strInput.trim()) {
    return false;
  }

  return !isNaN(strInput);
}

// Get input until not number

let input;

let arr = [];

do {
  input = prompt("Enter number");
  if (isNumber(input)) {
    arr[arr.length] = +input;
  }
} while (isNumber(input));

// Get sum of array

let sum = 0;

for (let el of arr) {
  sum += el;
}

console.log(sum);
