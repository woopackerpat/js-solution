let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const result = alphabets.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);
