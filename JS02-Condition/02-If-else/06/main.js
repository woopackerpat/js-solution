let input1 = prompt("Enter number 1");
let input2 = prompt("Enter number 2");

if (
  input1 === null ||
  isNaN(!input1) ||
  input1.trim() === "" ||
  input2 === null ||
  isNaN(!input2) ||
  input2.trim() === ""
) {
  alert("Invaid number");
} else {
  alert(Number(input1) + Number(input2));
}
