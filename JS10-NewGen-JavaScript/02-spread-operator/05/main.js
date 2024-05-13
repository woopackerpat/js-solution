const removeRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  const cloneArray = [...array];

  cloneArray.splice(randomIndex, 1);

  return cloneArray;
};
