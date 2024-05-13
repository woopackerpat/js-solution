let score = prompt("Enter score");

if (score === null || score.trim() === "" || isNaN(+score)) {
  alert("Invalid score");
} else {
  if (score >= 80) {
    alert("A");
  } else if (score >= 70) {
    alert("B");
  } else if (score >= 60) {
    alert("C");
  } else if (score >= 50) {
    alert("D");
  } else {
    alert("F");
  }
}
