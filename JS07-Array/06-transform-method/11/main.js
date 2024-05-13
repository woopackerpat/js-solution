let str = "I live in Thailand";

const splited = str.toLowerCase().split("");

// [i, , l, i, v, e, , i, n]

const result = splited.reduce((acc, curr) => {
  if (curr !== " ") {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
  }

  return acc;
}, {});
