let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const result = names.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
