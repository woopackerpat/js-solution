let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = flattened.reduce((acc, curr) => {
  const newArr = acc.concat(curr);

  return newArr;
}, []);
