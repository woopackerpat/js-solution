const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];

const result = persons.reduce((acc, curr) => {
  if (acc[curr.sex]) {
    acc[curr.sex].push(curr.name);
  } else {
    acc[curr.sex] = [curr.name];
  }

  return acc;
}, {});
