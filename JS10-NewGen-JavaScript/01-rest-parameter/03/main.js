const mergeObjects = (...objects) => {
  // objects -> [{name: "John"}, {name: "Doe"},{name: "Woody"}]
  const newObj = Object.assign({}, ...objects.reverse());
  return newObj;
};
