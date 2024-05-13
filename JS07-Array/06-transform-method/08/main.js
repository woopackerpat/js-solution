const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

const result = scores.reduce((acc, curr) => {
  return acc + curr.score * curr.weight;
}, 0);
