let score = prompt("Enter score");

score === null || score.trim() === "" || isNaN(+score)
  ? alert("Invid score")
  : score >= 80
  ? alert("A")
  : score >= 70
  ? alert("B")
  : alert("F");
