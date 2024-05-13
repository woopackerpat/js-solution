const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];

const result = products.reduce((acc, curr) => {
  acc[curr.id] = { name: curr.name };

  return acc;
}, {});
