const squareIndexThree = (array) => {
  const clone = [...array];

  if (clone[3]) {
    clone[3] = clone[3] ** 2;
  }

  return clone;
};
