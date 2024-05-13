const multiply = (...numbers) => {
  // array
  return numbers.reduce((acc, curr) => acc * curr, 1);
};
